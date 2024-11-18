declare namespace protobuf {
	class Writer {
		reset(): void;
		static create(): Writer;
	}
	class Reader {
		buf: Buffer;
		pos: number;
		len: number;
		static create(buffer: Buffer): Reader;
	}
}
export class MessageMgr {

	private static _protoBufWriter: protobuf.Writer = protobuf.Writer.create()
	private static _protoBufReader: protobuf.Reader = protobuf.Reader.create(Buffer.alloc(1))
	private static _protoBufClass: Map<number, any> = new Map<number, any>()
	private static _indexOfProtoName: { [key: string]: number } = {};
	private static _messagehandles: Map<number, Function> = new Map<number, Function>();

	private static _isInit: boolean = false;
	private static _unRegisterHandlers: Map<string, any> = new Map<string, any>()

	public static init(allProto: any) {
		this._isInit = true;
		this.addFunToProtobuf();
		for (const protoKey in allProto) {
			const protoModule = allProto[protoKey];

			for (let key in protoModule) {
				if (key.startsWith("C_") || key.startsWith("S_")) {
					const protoClass = protoModule[key];
					if (isNaN(protoClass.prototype.cmd) || isNaN(protoClass.prototype.scmd)) {
						throw new Error("协议头cmd , scmd 值错误," + protoKey)
					}

					let protoIndex = this.getComposeCmdId(protoClass.prototype.cmd, protoClass.prototype.scmd);
					this._protoBufClass.set(protoIndex, protoClass);
					if (key.startsWith("S_")) {
						const handler = this._unRegisterHandlers.get(key);
						if (handler) {
							cc.log('注册协议处理函数:', key);
							this._messagehandles.set(protoIndex, handler);
						} else {
							this._indexOfProtoName[key] = protoIndex;
						}
					}
				}
			}
		}

		this._unRegisterHandlers.clear();
		this._unRegisterHandlers = null;
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

		const raw = protoBufAny.Reader.prototype.int64;

		protoBufAny.Reader.prototype.int64 = function () {
			const result = raw.call(this)
			if (typeof (result) === "number") {
				return result
			} else {
				return result.toNumber()
			}
		}
	}

	public static addHandlerByName(protoName: string, handler: Function) {
		if (this._isInit === false) {
			if (this._unRegisterHandlers.has(protoName)) {
				cc.error('重复注册协议处理函数:', protoName);
				return;
			}
			this._unRegisterHandlers.set(protoName, handler);
			return;
		}

		const index = this._indexOfProtoName[protoName];
		if (index == null) {
			cc.error('不存在的协议', protoName);
			return;
		}
		if (this._messagehandles.has(index)) {
			cc.error('重复注册协议处理函数:', protoName);
			return;
		}
		cc.log('注册协议处理函数:', protoName);
		this._messagehandles.set(index, handler);
	}

	public static getHandler(protoIndex: number) {
		return this._messagehandles.get(protoIndex);
	}

	public static encode(message: IGameMessage): Buffer {
		if (!message) {
			return
		}

		let index = this.getComposeCmdId(message.cmd, message.scmd);
		let messageClass = this._protoBufClass.get(index)
		if (!messageClass) {
			throw new Error("未找到注册的协议编码类:" + index)
		}
		this._protoBufWriter.reset();
		const writer = messageClass.encode(message, this._protoBufWriter)
		return writer.finishWithSysCmd(message.cmd, message.scmd)
	}

	public static decode(buffer, offset: number): IGameMessage {
		if (buffer.length < 8) {
			cc.error("protobuf decode err! buffer长度小于8")
			return;
		}
		let dataView = new DataView(buffer);
		const cmd = dataView.getInt32(offset);
		const scmd = dataView.getInt32(offset + 4);
		if (Buffer.isBuffer(buffer) === false) {
			buffer = Buffer.from(buffer);
		}

		const messageIndex = this.getComposeCmdId(cmd, scmd);
		const messageClass = this._protoBufClass.get(messageIndex)

		if (!messageClass) {
			cc.error("无法获取协议:", cmd, scmd)
			return null;
		}

		this._protoBufReader.buf = buffer
		this._protoBufReader.pos = offset + 8;
		this._protoBufReader.len = buffer.length
		let result = null
		try {
			result = messageClass.decode(this._protoBufReader);
		} catch (e) {
			cc.error("解码消息失败 ：", messageClass.name)
		}

		return result;
	}

	public static handleBuffer(buffer, offset: number) {
		if (buffer.length < 8) {
			cc.error("protobuf decode err! buffer长度小于8")
			return;
		}
		let dataView = new DataView(buffer);
		const cmd = dataView.getInt32(offset);
		const scmd = dataView.getInt32(offset + 4);
		if (Buffer.isBuffer(buffer) === false) {
			buffer = Buffer.from(buffer);
		}

		const messageIndex = this.getComposeCmdId(cmd, scmd);
		const messageClass = this._protoBufClass.get(messageIndex)

		if (!messageClass) {
			cc.error("无法获取协议:", cmd, scmd)
			return null;
		}

		this._protoBufReader.buf = buffer
		this._protoBufReader.pos = offset + 8;
		this._protoBufReader.len = buffer.length
		let result = null
		try {
			result = messageClass.decode(this._protoBufReader);
			if (result) {
				let handler = this._messagehandles.get(messageIndex);
				if (handler) {
					handler(result);
				} else {
					cc.error(`没有处理函数:${messageClass.name}`)
				}
			}
		} catch (e) {
			cc.error("解码消息失败 :", messageClass.name)
		}

	}

	public static getComposeCmdId(cmd: number, scmd: number) {
		return cmd * 10000 + scmd;
	}
}