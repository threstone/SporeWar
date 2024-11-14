
declare namespace protobuf {
	class Writer {
		reset(): void;
		static create(): Writer;
	}
	class Reader {
		buf: Buffer;
		pos: number;
		len: number;
		static create(Buffer): Reader;
	}
}
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
	public static init(allProto?: any, handlerObj?: Map<string, { target: object, func: string }>) {
		try {
			ProtoBufEncoder.addFunToProtobuf();
			this.autoMapping(allProto, handlerObj);
		} catch (error) {
			console.error(error)
		}
	}

	private static addFunToProtobuf() {
		// 给protobuf的默认编码函数 增加 一个
		const protoBufAny: any = window["protobuf"];
		protoBufAny.Writer.prototype.finishWithSysCmd = function (sysid: number, cmdid: number) {
			let head = this.head.next;
			const buf = this.constructor.alloc(this.len + 8) as Uint8Array;
			const dataView = new DataView(buf.buffer);
			dataView.setInt32(buf.byteOffset, sysid);
			dataView.setInt32(buf.byteOffset + 4, cmdid);
			let pos = 8;
			while (head) {
				head.fn(head.val, buf, pos);
				pos += head.len;
				head = head.next;
			}
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
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

	private static autoMapping(allProto?: any, handlerObj?: Map<string, { target: object, func: string }>) {
		if (!allProto || !handlerObj) {
			return;
		}

		for (const protoKey in allProto) {
			let protoClass = allProto[protoKey];
			window[protoKey] = protoClass;
			this.addProtoModule(protoClass, handlerObj);
		}
	}

	public static setProtoClass(cmd: number, scmd: number, protoClass: any) {
		let protoIndex = ProtoBufEncoder.getComposeCmdId(cmd, scmd);
		if (ProtoBufEncoder.protoBufClass.has(protoIndex)) {
			console.error(`该位置已有protoClass cmd:${cmd} scmd:${scmd}`)
			return
		}
		ProtoBufEncoder.protoBufClass.set(protoIndex, protoClass)
	}

	//添加一个协议模块 prefix 为匹配消息前缀
	public static addProtoModule(protoModule: any, handle: Map<string, { target: object, func: string }>) {
		for (let key in protoModule) {
			if (key.startsWith("C_") || key.startsWith("S_")) {
				const protoClass = protoModule[key]

				if (isNaN(protoClass.prototype.cmd) || isNaN(protoClass.prototype.scmd)) {
					throw new Error("协议头cmd , scmd 值错误," + key)
				}

				let protoIndex = ProtoBufEncoder.getComposeCmdId(protoClass.prototype.cmd, protoClass.prototype.scmd);
				ProtoBufEncoder.protoBufClass.set(protoIndex, protoClass)

				//客户端的代码需要注册一下
				if (key.startsWith("S_")) {
					if (handle) {
						let data = handle.get(key);
						if (data) {
							//@ts-ignore
							cc.game.emit('setResponseHandler', protoIndex, data.target.instance[data.func], data.target.instance)
						} else {
							console.error("客户端协议:", protoIndex, "  ", protoClass.name, "未找到处理函数")
						}
						// this.messagehandles_.set(protoIndex, handle[protoClass.name])
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

		let index = ProtoBufEncoder.getComposeCmdId(message.cmd, message.scmd);
		let messageClass = ProtoBufEncoder.protoBufClass.get(index)
		if (!messageClass) {
			throw new Error("未找到注册的协议编码类:" + index)
		}
		ProtoBufEncoder.protoBufWriter.reset();
		const writer = messageClass.encode(message, ProtoBufEncoder.protoBufWriter)
		return writer.finishWithSysCmd(message.cmd, message.scmd)
	}

	public static decode(buffer, offset: number): IGameMessage {
		if (buffer.length < 8) {
			console.error("protobuf decode err! buffer长度小于8")
			return;
		}
		let dataView = new DataView(buffer);
		const cmd = dataView.getInt32(offset);
		const scmd = dataView.getInt32(offset + 4);
		if (Buffer.isBuffer(buffer) === false) {
			buffer = Buffer.from(buffer);
		}

		const messageIndex = ProtoBufEncoder.getComposeCmdId(cmd, scmd);
		const messageClass = ProtoBufEncoder.protoBufClass.get(messageIndex)

		if (!messageClass) {
			console.error("无法获取协议:", cmd, scmd)
			return null;
		}

		ProtoBufEncoder.protoBufReader.buf = buffer
		ProtoBufEncoder.protoBufReader.pos = offset + 8
		ProtoBufEncoder.protoBufReader.len = buffer.length
		let result = null
		try {
			result = messageClass.decode(ProtoBufEncoder.protoBufReader);
		} catch (e) {
			console.error("解码消息失败 ：", messageClass.name)
		}

		return result;
	}

	public static getComposeCmdId(cmd: number, scmd: number) {
		return cmd * 10000 + scmd;
	}
}