import * as protobuf from 'protobufjs';
import * as fs from 'fs';

const CMDTimes = 10000;
export class ProtoBufEncoder {
	private static _messagehandles: Map<number, Function>;

	private static _protoBufWriter: protobuf.Writer = protobuf.Writer.create();

	private static _protoBufReader: protobuf.Reader = protobuf.Reader.create(Buffer.alloc(1));

	private static _protoBufClass: Map<number, any>;

	/**
	 *
	 * @param log
	 * @param allProto
	 * @param handlerPath handler
	 */
	public static init(allProto?: any, handlerPath?: string) {
		try {
			this._messagehandles = new Map<number, Function>();
			this._protoBufClass = new Map<number, any>();
			this.addFunToProtobuf();
			this.autoMapping(allProto, handlerPath);
		} catch (error) {
			logger.error(error);
		}
	}

	private static addFunToProtobuf() {
		// 给protobuf的默认编码函数 增加 一个
		const protoBufAny: any = protobuf;
		protoBufAny.Writer.prototype.finishWithSysCmd = function (sysid: number, cmdid: number) {
			let head = this.head.next;
			const buf = this.constructor.alloc(this.len + 8);
			buf.writeInt32BE(sysid, 0);
			buf.writeInt32BE(cmdid, 4);
			let pos = 8;
			while (head) {
				head.fn(head.val, buf, pos);
				pos += head.len;
				head = head.next;
			}
			return buf;
		};

		const raw = protoBufAny.Reader.prototype.int64;

		protoBufAny.Reader.prototype.int64 = function () {
			const result = raw.call(this);
			if (typeof (result) === 'number') {
				return result;
			}
			return result.toNumber();
		};
	}

	private static autoMapping(allProto?: any, handlerPath?: string) {
		if (!allProto || !handlerPath) {
			return;
		}
		const handlerObj = {};
		const files = fs.readdirSync(handlerPath);
		for (let i = 0; i < files.length; i++) {
			const fileName = files[i];
			if (fileName.endsWith('Handler.js')) {
				// eslint-disable-next-line import/no-dynamic-require, global-require
				const temp = require(`${handlerPath}/${fileName}`);
				for (const key in temp) {
					if (key.endsWith('Handler')) {
						if (!handlerObj[key]) {
							handlerObj[key] = temp[key];
						} else {
							logger.error(`重复的handler文件:${key}`);
						}
					}
				}
			}
		}

		const keys = Object.keys(allProto);
		for (let index = 0; index < keys.length; index++) {
			const protoKey = keys[index];
			const protoClass = allProto[protoKey];
			for (const key in protoClass) {
				if (key.startsWith('C_') || key.startsWith('S_')) {
					const temp = protoClass[key];
					// eslint-disable-next-line
					if (temp.prototype.cmd == undefined || !temp.prototype.scmd == undefined) {
						logger.error(`${protoKey}.${key}不存在cmd scmd, 注册失败!`);
						continue;
					}
					ProtoBufEncoder.setProtoClass(temp.prototype.cmd, temp.prototype.scmd, temp);
					if (key.startsWith('S_')) {
						continue;
					}
					let isFind = false;
					const handlerKeys = Object.keys(handlerObj);
					for (let z = 0; z < handlerKeys.length; z++) {
						const handleName = handlerKeys[z];
						const handler = handlerObj[handleName];
						if (handler[key]) {
							ProtoBufEncoder.setHandler(temp.prototype.cmd, temp.prototype.scmd, handler[key].bind(handler));
							logger.debug(`注册函数 ${key}`);
							isFind = true;
							break;
						}
					}
					// eslint-disable-next-line eqeqeq
					if (!isFind && ProtoBufEncoder.getHandlerFunction(temp.prototype.cmd, temp.prototype.scmd) == undefined) {
						logger.warn(`未找到注册函数 ${key}`);
					}
				}
			}
		}
	}

	public static setHandler(cmd: number, scmd: number, fun: Function) {
		const protoIndex = cmd * CMDTimes + scmd;
		if (this._messagehandles[protoIndex]) {
			logger.error(`该位置已有注册函数 cmd:${cmd} scmd:${scmd}`);
			return;
		}
		this._messagehandles.set(protoIndex, fun);
	}

	public static setProtoClass(cmd: number, scmd: number, protoClass: any) {
		const protoIndex = cmd * CMDTimes + scmd;
		if (ProtoBufEncoder._protoBufClass.has(protoIndex)) {
			logger.error(`该位置已有protoClass cmd:${cmd} scmd:${scmd}`);
			return;
		}
		ProtoBufEncoder._protoBufClass.set(protoIndex, protoClass);
	}

	// 添加一个协议模块 prefix 为匹配消息前缀
	public static addProtoModule(protoModule: any, handle: any) {
		for (const key in protoModule) {
			if (key.startsWith('C_') || key.startsWith('S_')) {
				const protoClass = protoModule[key];

				if (Number.isNaN(protoClass.prototype.cmd) || Number.isNaN(protoClass.prototype.scmd)) {
					throw new Error(`协议头cmd , scmd 值错误,${key}`);
				}

				const protoIndex = protoClass.prototype.cmd * CMDTimes + protoClass.prototype.scmd;
				ProtoBufEncoder._protoBufClass.set(protoIndex, protoClass);

				// 客户端的代码需要注册一下
				if (key.startsWith('C_')) {
					logger.log('添加协议:', protoClass.name);
					if (handle && handle[protoClass.name]) {
						this._messagehandles.set(protoIndex, handle[protoClass.name]);
					} else {
						logger.error('客户端协议:', protoIndex, '  ', protoClass.name, '未找到处理函数');
					}
				}
			}
		}
	}

	public static encode(message: IGameMessage): Buffer {
		if (!message) {
			return null;
		}
		const index = message.cmd * CMDTimes + message.scmd;
		const messageClass = ProtoBufEncoder._protoBufClass.get(index);
		if (!messageClass) {
			throw new Error(`未找到注册的协议编码类: cmd:${message.cmd} scmd:${message.scmd}`);
		}
		ProtoBufEncoder._protoBufWriter.reset();
		const writer = messageClass.encode(message, ProtoBufEncoder._protoBufWriter);
		return writer.finishWithSysCmd(message.cmd, message.scmd);
	}

	public static decode(buffer: Buffer, offset: number): IGameMessage {
		if (buffer.length < 8) {
			logger.error('protobuf decode err! buffer长度小于8');
			return null;
		}
		if (Buffer.isBuffer(buffer) === false) {
			buffer = Buffer.from(buffer);
		}
		const cmd = buffer.readInt32BE(offset);
		const scmd = buffer.readInt32BE(offset + 4);
		const messageIndex = cmd * CMDTimes + scmd;
		const messageClass = ProtoBufEncoder._protoBufClass.get(messageIndex);

		if (!messageClass) {
			logger.error('无法获取协议:', cmd, scmd);
			return null;
		}

		ProtoBufEncoder._protoBufReader.buf = buffer;
		ProtoBufEncoder._protoBufReader.pos = offset + 8;
		ProtoBufEncoder._protoBufReader.len = buffer.length;
		let result = null;
		try {
			result = messageClass.decode(ProtoBufEncoder._protoBufReader);
		} catch (e) {
			logger.error('解码消息失败 ：', messageClass.name);
		}

		return result;
	}

	// 获取注册执行的HandleFunction
	public static getHandlerFunction(cmd: number, scmd: number): Function {
		const messageIndex = cmd * CMDTimes + scmd;
		return ProtoBufEncoder._messagehandles.get(messageIndex);
	}
}
