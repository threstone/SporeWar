
import * as protobuf from "protobufjs"
import * as fs from 'fs';

const CMDTimes = 10000;
export class ProtoBufEncoder {

	private static messagehandles_: Map<number, Function> = new Map<number, Function>()
	private static protoBufWriter: protobuf.Writer = protobuf.Writer.create()
	private static protoBufReader: protobuf.Reader = protobuf.Reader.create(Buffer.alloc(1))
	private static protoBufClass: Map<number, any> = new Map<number, any>()

	/**
	 * 
	 * @param log 
	 * @param allProto 
	 * @param handlerPath handler
	 */
	public static init(allProto?: any, handlerPath?: string) {
		try {
			this.addFunToProtobuf();
			this.autoMapping(allProto, handlerPath);
		} catch (error) {
			console.error(error)
		}
	}

	private static addFunToProtobuf() {
		// 给protobuf的默认编码函数 增加 一个
		const protoBufAny: any = protobuf
		protoBufAny.Writer.prototype.finishWithSysCmd = function (sysid: number, cmdid: number) {
			let head = this.head.next
			const buf = this.constructor.alloc(this.len + 8)
			buf.writeInt32BE(sysid, 0)
			buf.writeInt32BE(cmdid, 4)
			let pos = 8
			while (head) {
				head.fn(head.val, buf, pos)
				pos += head.len
				head = head.next
			}
			return buf
		}

		const raw = protoBufAny.Reader.prototype.int64

		protoBufAny.Reader.prototype.int64 = function () {
			const result = raw.call(this)
			if (typeof (result) === "number") {
				return result
			} else {
				return result.toNumber()
			}
		}
	}

	private static autoMapping(allProto?: any, handlerPath?: string) {
		if (!allProto || !handlerPath) {
			return;
		}
		let handlerObj = {};;
		let files = fs.readdirSync(handlerPath);
		for (let i = 0; i < files.length; i++) {
			if (files[i].endsWith('.js')) {
				let temp = require(handlerPath + '/' + files[i]);
				for (let key in temp) {
					if (key.endsWith('Handler')) {
						if (handlerObj[key]) {
							console.error(`重复的handler文件:${key}`);
							continue;
						}
						handlerObj[key] = temp[key];
					}
				}
			}
		}

		for (const protoKey in allProto) {
			let protoClass = allProto[protoKey];
			for (const key in protoClass) {
				if (key.startsWith('C_') || key.startsWith('S_')) {
					let temp = protoClass[key];
					if (temp.prototype.cmd == undefined || !temp.prototype.scmd == undefined) {
						console.error(`${protoKey}.${key}不存在cmd scmd, 注册失败!`,);
						continue;
					}
					ProtoBufEncoder.setProtoClass(temp.prototype.cmd, temp.prototype.scmd, temp);
					if (key.startsWith('S_')) {
						continue;
					}
					let isFind = false;
					for (const handleName in handlerObj) {
						let handler = handlerObj[handleName];
						if (handler[key]) {
							ProtoBufEncoder.setHandler(temp.prototype.cmd, temp.prototype.scmd, handler[key].bind(handler));
							console.info(`注册函数 ${key}`);
							isFind = true;
							break;
						}
					}
					// if (!isFind && ProtoBufEncoder.getHandlerFunction(temp.prototype.cmd, temp.prototype.scmd) == undefined) {
					// 	console.info(`未找到注册函数 ${key}`);
					// }
				}
			}
		}
	}

	public static setHandler(cmd: number, scmd: number, fun: Function) {
		let protoIndex = cmd * CMDTimes + scmd
		if (this.messagehandles_[protoIndex]) {
			console.error(`该位置已有注册函数 cmd:${cmd} scmd:${scmd}`)
			return
		}
		this.messagehandles_.set(protoIndex, fun)
	}

	public static setProtoClass(cmd: number, scmd: number, protoClass: any) {
		let protoIndex = cmd * CMDTimes + scmd
		if (ProtoBufEncoder.protoBufClass.has(protoIndex)) {
			console.error(`该位置已有protoClass cmd:${cmd} scmd:${scmd}`)
			return
		}
		ProtoBufEncoder.protoBufClass.set(protoIndex, protoClass)
	}

	//添加一个协议模块 prefix 为匹配消息前缀
	public static addProtoModule(protoModule: any, handle: any) {
		for (let key in protoModule) {
			if (key.startsWith("C_") || key.startsWith("S_")) {
				const protoClass = protoModule[key]

				if (isNaN(protoClass.prototype.cmd) || isNaN(protoClass.prototype.scmd)) {
					throw new Error("协议头cmd , scmd 值错误," + key)
				}

				let protoIndex = protoClass.prototype.cmd * CMDTimes + protoClass.prototype.scmd
				ProtoBufEncoder.protoBufClass.set(protoIndex, protoClass)

				//客户端的代码需要注册一下
				if (key.startsWith("C_")) {
					console.log("添加协议:", protoClass.name)
					if (handle && handle[protoClass.name]) {
						this.messagehandles_.set(protoIndex, handle[protoClass.name])
					} else {
						console.error("客户端协议:", protoIndex, "  ", protoClass.name, "未找到处理函数")
					}
				}

			}
		}
	}

	public static encode(message: IGameMessage): Buffer {
		if (!message) {
			return
		}
		let index = message.cmd * CMDTimes + message.scmd
		let messageClass = ProtoBufEncoder.protoBufClass.get(index)
		if (!messageClass) {
			throw new Error("未找到注册的协议编码类:" + index)
		}
		ProtoBufEncoder.protoBufWriter.reset()
		const writer = messageClass.encode(message, ProtoBufEncoder.protoBufWriter)
		return writer.finishWithSysCmd(message.cmd, message.scmd)
	}

	public static decode(buffer: Buffer, offset: number): IGameMessage {
		if (buffer.length < 8) {
			console.error("protobuf decode err! buffer长度小于8")
			return
		}
		if (Buffer.isBuffer(buffer) === false) {
			buffer = Buffer.from(buffer);
		}
		const cmd = buffer.readInt32BE(offset)
		const scmd = buffer.readInt32BE(offset + 4)
		const messageIndex = cmd * CMDTimes + scmd
		const messageClass = ProtoBufEncoder.protoBufClass.get(messageIndex)

		if (!messageClass) {
			console.error("无法获取协议:", cmd, scmd)
			return null
		}

		ProtoBufEncoder.protoBufReader.buf = buffer
		ProtoBufEncoder.protoBufReader.pos = offset + 8
		ProtoBufEncoder.protoBufReader.len = buffer.length
		let result = null
		try {
			result = messageClass.decode(ProtoBufEncoder.protoBufReader)
		} catch (e) {
			console.error("解码消息失败 ：", messageClass.name)
		}

		return result
	}

	//获取注册执行的HandleFunction
	public static getHandlerFunction(cmd: number, scmd: number): Function {
		const messageIndex = cmd * CMDTimes + scmd
		return ProtoBufEncoder.messagehandles_.get(messageIndex)
	}
}