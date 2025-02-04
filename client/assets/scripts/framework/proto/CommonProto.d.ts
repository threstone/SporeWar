import * as $protobuf from "protobufjs";
/** Namespace SystemPto. */
export namespace SystemPto {

    /** Properties of a S_ERROR. */
    interface IS_ERROR {

        /** S_ERROR cmd */
        cmd?: (number|null);

        /** S_ERROR scmd */
        scmd?: (number|null);

        /** S_ERROR code */
        code?: (number|null);

        /** S_ERROR msg */
        msg?: (string|null);
    }

    /** Represents a S_ERROR. */
    class S_ERROR implements IS_ERROR {

        /**
         * Constructs a new S_ERROR.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_ERROR);

        /** S_ERROR cmd. */
        public cmd: number;

        /** S_ERROR scmd. */
        public scmd: number;

        /** S_ERROR code. */
        public code: number;

        /** S_ERROR msg. */
        public msg: string;

        /**
         * Encodes the specified S_ERROR message. Does not implicitly {@link SystemPto.S_ERROR.verify|verify} messages.
         * @param message S_ERROR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_ERROR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ERROR message, length delimited. Does not implicitly {@link SystemPto.S_ERROR.verify|verify} messages.
         * @param message S_ERROR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_ERROR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ERROR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_ERROR;

        /**
         * Decodes a S_ERROR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_ERROR;

        /**
         * Verifies a S_ERROR message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ERROR message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ERROR
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_ERROR;

        /**
         * Creates a plain object from a S_ERROR message. Also converts values to other types if specified.
         * @param message S_ERROR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_ERROR, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ERROR to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_HEART_BEAT. */
    interface IC_HEART_BEAT {

        /** C_HEART_BEAT cmd */
        cmd?: (number|null);

        /** C_HEART_BEAT scmd */
        scmd?: (number|null);
    }

    /** Represents a C_HEART_BEAT. */
    class C_HEART_BEAT implements IC_HEART_BEAT {

        /**
         * Constructs a new C_HEART_BEAT.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IC_HEART_BEAT);

        /** C_HEART_BEAT cmd. */
        public cmd: number;

        /** C_HEART_BEAT scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_HEART_BEAT message. Does not implicitly {@link SystemPto.C_HEART_BEAT.verify|verify} messages.
         * @param message C_HEART_BEAT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IC_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_HEART_BEAT message, length delimited. Does not implicitly {@link SystemPto.C_HEART_BEAT.verify|verify} messages.
         * @param message C_HEART_BEAT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IC_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_HEART_BEAT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.C_HEART_BEAT;

        /**
         * Decodes a C_HEART_BEAT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.C_HEART_BEAT;

        /**
         * Verifies a C_HEART_BEAT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_HEART_BEAT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_HEART_BEAT
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.C_HEART_BEAT;

        /**
         * Creates a plain object from a C_HEART_BEAT message. Also converts values to other types if specified.
         * @param message C_HEART_BEAT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.C_HEART_BEAT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_HEART_BEAT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_HEART_BEAT. */
    interface IS_HEART_BEAT {

        /** S_HEART_BEAT cmd */
        cmd?: (number|null);

        /** S_HEART_BEAT scmd */
        scmd?: (number|null);

        /** S_HEART_BEAT serverTime */
        serverTime?: (number|null);
    }

    /** Represents a S_HEART_BEAT. */
    class S_HEART_BEAT implements IS_HEART_BEAT {

        /**
         * Constructs a new S_HEART_BEAT.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_HEART_BEAT);

        /** S_HEART_BEAT cmd. */
        public cmd: number;

        /** S_HEART_BEAT scmd. */
        public scmd: number;

        /** S_HEART_BEAT serverTime. */
        public serverTime: number;

        /**
         * Encodes the specified S_HEART_BEAT message. Does not implicitly {@link SystemPto.S_HEART_BEAT.verify|verify} messages.
         * @param message S_HEART_BEAT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_HEART_BEAT message, length delimited. Does not implicitly {@link SystemPto.S_HEART_BEAT.verify|verify} messages.
         * @param message S_HEART_BEAT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_HEART_BEAT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_HEART_BEAT;

        /**
         * Decodes a S_HEART_BEAT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_HEART_BEAT;

        /**
         * Verifies a S_HEART_BEAT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_HEART_BEAT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_HEART_BEAT
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_HEART_BEAT;

        /**
         * Creates a plain object from a S_HEART_BEAT message. Also converts values to other types if specified.
         * @param message S_HEART_BEAT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_HEART_BEAT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_HEART_BEAT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_KICK. */
    interface IS_KICK {

        /** S_KICK cmd */
        cmd?: (number|null);

        /** S_KICK scmd */
        scmd?: (number|null);

        /** S_KICK reason */
        reason?: (string|null);
    }

    /** Represents a S_KICK. */
    class S_KICK implements IS_KICK {

        /**
         * Constructs a new S_KICK.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_KICK);

        /** S_KICK cmd. */
        public cmd: number;

        /** S_KICK scmd. */
        public scmd: number;

        /** S_KICK reason. */
        public reason: string;

        /**
         * Encodes the specified S_KICK message. Does not implicitly {@link SystemPto.S_KICK.verify|verify} messages.
         * @param message S_KICK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_KICK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_KICK message, length delimited. Does not implicitly {@link SystemPto.S_KICK.verify|verify} messages.
         * @param message S_KICK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_KICK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_KICK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_KICK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_KICK;

        /**
         * Decodes a S_KICK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_KICK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_KICK;

        /**
         * Verifies a S_KICK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_KICK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_KICK
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_KICK;

        /**
         * Creates a plain object from a S_KICK message. Also converts values to other types if specified.
         * @param message S_KICK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_KICK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_KICK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_NEW_DAY. */
    interface IS_NEW_DAY {

        /** S_NEW_DAY cmd */
        cmd?: (number|null);

        /** S_NEW_DAY scmd */
        scmd?: (number|null);

        /** S_NEW_DAY dayStartMs */
        dayStartMs?: (number|null);
    }

    /** Represents a S_NEW_DAY. */
    class S_NEW_DAY implements IS_NEW_DAY {

        /**
         * Constructs a new S_NEW_DAY.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_NEW_DAY);

        /** S_NEW_DAY cmd. */
        public cmd: number;

        /** S_NEW_DAY scmd. */
        public scmd: number;

        /** S_NEW_DAY dayStartMs. */
        public dayStartMs: number;

        /**
         * Encodes the specified S_NEW_DAY message. Does not implicitly {@link SystemPto.S_NEW_DAY.verify|verify} messages.
         * @param message S_NEW_DAY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_NEW_DAY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_NEW_DAY message, length delimited. Does not implicitly {@link SystemPto.S_NEW_DAY.verify|verify} messages.
         * @param message S_NEW_DAY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_NEW_DAY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_NEW_DAY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_NEW_DAY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_NEW_DAY;

        /**
         * Decodes a S_NEW_DAY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_NEW_DAY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_NEW_DAY;

        /**
         * Verifies a S_NEW_DAY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_NEW_DAY message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_NEW_DAY
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_NEW_DAY;

        /**
         * Creates a plain object from a S_NEW_DAY message. Also converts values to other types if specified.
         * @param message S_NEW_DAY
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_NEW_DAY, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_NEW_DAY to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace ServerPto. */
export namespace ServerPto {

    /** Properties of a C_CONNECT. */
    interface IC_CONNECT {

        /** C_CONNECT cmd */
        cmd?: (number|null);

        /** C_CONNECT scmd */
        scmd?: (number|null);

        /** C_CONNECT token */
        token?: (string|null);

        /** C_CONNECT serverId */
        serverId?: (number|null);
    }

    /** Represents a C_CONNECT. */
    class C_CONNECT implements IC_CONNECT {

        /**
         * Constructs a new C_CONNECT.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IC_CONNECT);

        /** C_CONNECT cmd. */
        public cmd: number;

        /** C_CONNECT scmd. */
        public scmd: number;

        /** C_CONNECT token. */
        public token: string;

        /** C_CONNECT serverId. */
        public serverId: number;

        /**
         * Encodes the specified C_CONNECT message. Does not implicitly {@link ServerPto.C_CONNECT.verify|verify} messages.
         * @param message C_CONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IC_CONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CONNECT message, length delimited. Does not implicitly {@link ServerPto.C_CONNECT.verify|verify} messages.
         * @param message C_CONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IC_CONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CONNECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.C_CONNECT;

        /**
         * Decodes a C_CONNECT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.C_CONNECT;

        /**
         * Verifies a C_CONNECT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_CONNECT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_CONNECT
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.C_CONNECT;

        /**
         * Creates a plain object from a C_CONNECT message. Also converts values to other types if specified.
         * @param message C_CONNECT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.C_CONNECT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_CONNECT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_CONNECT. */
    interface IS_CONNECT {

        /** S_CONNECT cmd */
        cmd?: (number|null);

        /** S_CONNECT scmd */
        scmd?: (number|null);

        /** S_CONNECT loginInfo */
        loginInfo?: (PlayerPto.ILoginInfo|null);
    }

    /** Represents a S_CONNECT. */
    class S_CONNECT implements IS_CONNECT {

        /**
         * Constructs a new S_CONNECT.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IS_CONNECT);

        /** S_CONNECT cmd. */
        public cmd: number;

        /** S_CONNECT scmd. */
        public scmd: number;

        /** S_CONNECT loginInfo. */
        public loginInfo?: (PlayerPto.ILoginInfo|null);

        /**
         * Encodes the specified S_CONNECT message. Does not implicitly {@link ServerPto.S_CONNECT.verify|verify} messages.
         * @param message S_CONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IS_CONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CONNECT message, length delimited. Does not implicitly {@link ServerPto.S_CONNECT.verify|verify} messages.
         * @param message S_CONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IS_CONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CONNECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.S_CONNECT;

        /**
         * Decodes a S_CONNECT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.S_CONNECT;

        /**
         * Verifies a S_CONNECT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_CONNECT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_CONNECT
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.S_CONNECT;

        /**
         * Creates a plain object from a S_CONNECT message. Also converts values to other types if specified.
         * @param message S_CONNECT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.S_CONNECT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_CONNECT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_SWITCH_SERVER. */
    interface IC_SWITCH_SERVER {

        /** C_SWITCH_SERVER cmd */
        cmd?: (number|null);

        /** C_SWITCH_SERVER scmd */
        scmd?: (number|null);

        /** C_SWITCH_SERVER token */
        token?: (string|null);

        /** C_SWITCH_SERVER serverId */
        serverId?: (number|null);
    }

    /** Represents a C_SWITCH_SERVER. */
    class C_SWITCH_SERVER implements IC_SWITCH_SERVER {

        /**
         * Constructs a new C_SWITCH_SERVER.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IC_SWITCH_SERVER);

        /** C_SWITCH_SERVER cmd. */
        public cmd: number;

        /** C_SWITCH_SERVER scmd. */
        public scmd: number;

        /** C_SWITCH_SERVER token. */
        public token: string;

        /** C_SWITCH_SERVER serverId. */
        public serverId: number;

        /**
         * Encodes the specified C_SWITCH_SERVER message. Does not implicitly {@link ServerPto.C_SWITCH_SERVER.verify|verify} messages.
         * @param message C_SWITCH_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IC_SWITCH_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SWITCH_SERVER message, length delimited. Does not implicitly {@link ServerPto.C_SWITCH_SERVER.verify|verify} messages.
         * @param message C_SWITCH_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IC_SWITCH_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SWITCH_SERVER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SWITCH_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.C_SWITCH_SERVER;

        /**
         * Decodes a C_SWITCH_SERVER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SWITCH_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.C_SWITCH_SERVER;

        /**
         * Verifies a C_SWITCH_SERVER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SWITCH_SERVER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SWITCH_SERVER
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.C_SWITCH_SERVER;

        /**
         * Creates a plain object from a C_SWITCH_SERVER message. Also converts values to other types if specified.
         * @param message C_SWITCH_SERVER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.C_SWITCH_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SWITCH_SERVER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_SWITCH_SERVER. */
    interface IS_SWITCH_SERVER {

        /** S_SWITCH_SERVER cmd */
        cmd?: (number|null);

        /** S_SWITCH_SERVER scmd */
        scmd?: (number|null);

        /** S_SWITCH_SERVER loginInfo */
        loginInfo?: (PlayerPto.ILoginInfo|null);
    }

    /** Represents a S_SWITCH_SERVER. */
    class S_SWITCH_SERVER implements IS_SWITCH_SERVER {

        /**
         * Constructs a new S_SWITCH_SERVER.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IS_SWITCH_SERVER);

        /** S_SWITCH_SERVER cmd. */
        public cmd: number;

        /** S_SWITCH_SERVER scmd. */
        public scmd: number;

        /** S_SWITCH_SERVER loginInfo. */
        public loginInfo?: (PlayerPto.ILoginInfo|null);

        /**
         * Encodes the specified S_SWITCH_SERVER message. Does not implicitly {@link ServerPto.S_SWITCH_SERVER.verify|verify} messages.
         * @param message S_SWITCH_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IS_SWITCH_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_SWITCH_SERVER message, length delimited. Does not implicitly {@link ServerPto.S_SWITCH_SERVER.verify|verify} messages.
         * @param message S_SWITCH_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IS_SWITCH_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SWITCH_SERVER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SWITCH_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.S_SWITCH_SERVER;

        /**
         * Decodes a S_SWITCH_SERVER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_SWITCH_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.S_SWITCH_SERVER;

        /**
         * Verifies a S_SWITCH_SERVER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_SWITCH_SERVER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_SWITCH_SERVER
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.S_SWITCH_SERVER;

        /**
         * Creates a plain object from a S_SWITCH_SERVER message. Also converts values to other types if specified.
         * @param message S_SWITCH_SERVER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.S_SWITCH_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_SWITCH_SERVER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_GET_SERVER_LIST. */
    interface IC_GET_SERVER_LIST {

        /** C_GET_SERVER_LIST cmd */
        cmd?: (number|null);

        /** C_GET_SERVER_LIST scmd */
        scmd?: (number|null);
    }

    /** Represents a C_GET_SERVER_LIST. */
    class C_GET_SERVER_LIST implements IC_GET_SERVER_LIST {

        /**
         * Constructs a new C_GET_SERVER_LIST.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IC_GET_SERVER_LIST);

        /** C_GET_SERVER_LIST cmd. */
        public cmd: number;

        /** C_GET_SERVER_LIST scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_GET_SERVER_LIST message. Does not implicitly {@link ServerPto.C_GET_SERVER_LIST.verify|verify} messages.
         * @param message C_GET_SERVER_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IC_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_SERVER_LIST message, length delimited. Does not implicitly {@link ServerPto.C_GET_SERVER_LIST.verify|verify} messages.
         * @param message C_GET_SERVER_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IC_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_SERVER_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.C_GET_SERVER_LIST;

        /**
         * Decodes a C_GET_SERVER_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.C_GET_SERVER_LIST;

        /**
         * Verifies a C_GET_SERVER_LIST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_SERVER_LIST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_SERVER_LIST
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.C_GET_SERVER_LIST;

        /**
         * Creates a plain object from a C_GET_SERVER_LIST message. Also converts values to other types if specified.
         * @param message C_GET_SERVER_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.C_GET_SERVER_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_SERVER_LIST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_SERVER_LIST. */
    interface IS_GET_SERVER_LIST {

        /** S_GET_SERVER_LIST cmd */
        cmd?: (number|null);

        /** S_GET_SERVER_LIST scmd */
        scmd?: (number|null);

        /** S_GET_SERVER_LIST list */
        list?: (ServerPto.IServerInfo[]|null);
    }

    /** Represents a S_GET_SERVER_LIST. */
    class S_GET_SERVER_LIST implements IS_GET_SERVER_LIST {

        /**
         * Constructs a new S_GET_SERVER_LIST.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IS_GET_SERVER_LIST);

        /** S_GET_SERVER_LIST cmd. */
        public cmd: number;

        /** S_GET_SERVER_LIST scmd. */
        public scmd: number;

        /** S_GET_SERVER_LIST list. */
        public list: ServerPto.IServerInfo[];

        /**
         * Encodes the specified S_GET_SERVER_LIST message. Does not implicitly {@link ServerPto.S_GET_SERVER_LIST.verify|verify} messages.
         * @param message S_GET_SERVER_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IS_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_SERVER_LIST message, length delimited. Does not implicitly {@link ServerPto.S_GET_SERVER_LIST.verify|verify} messages.
         * @param message S_GET_SERVER_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IS_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_SERVER_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.S_GET_SERVER_LIST;

        /**
         * Decodes a S_GET_SERVER_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.S_GET_SERVER_LIST;

        /**
         * Verifies a S_GET_SERVER_LIST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_SERVER_LIST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_SERVER_LIST
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.S_GET_SERVER_LIST;

        /**
         * Creates a plain object from a S_GET_SERVER_LIST message. Also converts values to other types if specified.
         * @param message S_GET_SERVER_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.S_GET_SERVER_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_SERVER_LIST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfo. */
    interface IServerInfo {

        /** ServerInfo id */
        id?: (number|null);

        /** ServerInfo name */
        name?: (string|null);

        /** ServerInfo startTime */
        startTime?: (number|null);

        /** ServerInfo status */
        status?: (number|null);

        /** ServerInfo tag */
        tag?: (number|null);
    }

    /** Represents a ServerInfo. */
    class ServerInfo implements IServerInfo {

        /**
         * Constructs a new ServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IServerInfo);

        /** ServerInfo id. */
        public id: number;

        /** ServerInfo name. */
        public name: string;

        /** ServerInfo startTime. */
        public startTime: number;

        /** ServerInfo status. */
        public status: number;

        /** ServerInfo tag. */
        public tag: number;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link ServerPto.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link ServerPto.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.ServerInfo;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.ServerInfo;

        /**
         * Verifies a ServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfo
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.ServerInfo;

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @param message ServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace TestPto. */
export namespace TestPto {

    /** Properties of a C_TEST_ADD_ITEMS. */
    interface IC_TEST_ADD_ITEMS {

        /** C_TEST_ADD_ITEMS cmd */
        cmd?: (number|null);

        /** C_TEST_ADD_ITEMS scmd */
        scmd?: (number|null);

        /** C_TEST_ADD_ITEMS itemId */
        itemId?: (number|null);

        /** C_TEST_ADD_ITEMS count */
        count?: (number|null);
    }

    /** Represents a C_TEST_ADD_ITEMS. */
    class C_TEST_ADD_ITEMS implements IC_TEST_ADD_ITEMS {

        /**
         * Constructs a new C_TEST_ADD_ITEMS.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_ADD_ITEMS);

        /** C_TEST_ADD_ITEMS cmd. */
        public cmd: number;

        /** C_TEST_ADD_ITEMS scmd. */
        public scmd: number;

        /** C_TEST_ADD_ITEMS itemId. */
        public itemId: number;

        /** C_TEST_ADD_ITEMS count. */
        public count: number;

        /**
         * Encodes the specified C_TEST_ADD_ITEMS message. Does not implicitly {@link TestPto.C_TEST_ADD_ITEMS.verify|verify} messages.
         * @param message C_TEST_ADD_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_ADD_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_ADD_ITEMS message, length delimited. Does not implicitly {@link TestPto.C_TEST_ADD_ITEMS.verify|verify} messages.
         * @param message C_TEST_ADD_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_ADD_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_ADD_ITEMS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_ADD_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_ADD_ITEMS;

        /**
         * Decodes a C_TEST_ADD_ITEMS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_ADD_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_ADD_ITEMS;

        /**
         * Verifies a C_TEST_ADD_ITEMS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_ADD_ITEMS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_ADD_ITEMS
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_ADD_ITEMS;

        /**
         * Creates a plain object from a C_TEST_ADD_ITEMS message. Also converts values to other types if specified.
         * @param message C_TEST_ADD_ITEMS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_ADD_ITEMS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_ADD_ITEMS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_UPDATE_CODE. */
    interface IC_TEST_UPDATE_CODE {

        /** C_TEST_UPDATE_CODE cmd */
        cmd?: (number|null);

        /** C_TEST_UPDATE_CODE scmd */
        scmd?: (number|null);
    }

    /** Represents a C_TEST_UPDATE_CODE. */
    class C_TEST_UPDATE_CODE implements IC_TEST_UPDATE_CODE {

        /**
         * Constructs a new C_TEST_UPDATE_CODE.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_UPDATE_CODE);

        /** C_TEST_UPDATE_CODE cmd. */
        public cmd: number;

        /** C_TEST_UPDATE_CODE scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_TEST_UPDATE_CODE message. Does not implicitly {@link TestPto.C_TEST_UPDATE_CODE.verify|verify} messages.
         * @param message C_TEST_UPDATE_CODE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_UPDATE_CODE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_UPDATE_CODE message, length delimited. Does not implicitly {@link TestPto.C_TEST_UPDATE_CODE.verify|verify} messages.
         * @param message C_TEST_UPDATE_CODE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_UPDATE_CODE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_UPDATE_CODE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_UPDATE_CODE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_UPDATE_CODE;

        /**
         * Decodes a C_TEST_UPDATE_CODE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_UPDATE_CODE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_UPDATE_CODE;

        /**
         * Verifies a C_TEST_UPDATE_CODE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_UPDATE_CODE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_UPDATE_CODE
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_UPDATE_CODE;

        /**
         * Creates a plain object from a C_TEST_UPDATE_CODE message. Also converts values to other types if specified.
         * @param message C_TEST_UPDATE_CODE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_UPDATE_CODE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_UPDATE_CODE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_MODIFY_SERVER_TIME. */
    interface IC_TEST_MODIFY_SERVER_TIME {

        /** C_TEST_MODIFY_SERVER_TIME cmd */
        cmd?: (number|null);

        /** C_TEST_MODIFY_SERVER_TIME scmd */
        scmd?: (number|null);

        /** C_TEST_MODIFY_SERVER_TIME time */
        time?: (number|null);
    }

    /** Represents a C_TEST_MODIFY_SERVER_TIME. */
    class C_TEST_MODIFY_SERVER_TIME implements IC_TEST_MODIFY_SERVER_TIME {

        /**
         * Constructs a new C_TEST_MODIFY_SERVER_TIME.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_MODIFY_SERVER_TIME);

        /** C_TEST_MODIFY_SERVER_TIME cmd. */
        public cmd: number;

        /** C_TEST_MODIFY_SERVER_TIME scmd. */
        public scmd: number;

        /** C_TEST_MODIFY_SERVER_TIME time. */
        public time: number;

        /**
         * Encodes the specified C_TEST_MODIFY_SERVER_TIME message. Does not implicitly {@link TestPto.C_TEST_MODIFY_SERVER_TIME.verify|verify} messages.
         * @param message C_TEST_MODIFY_SERVER_TIME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_MODIFY_SERVER_TIME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_MODIFY_SERVER_TIME message, length delimited. Does not implicitly {@link TestPto.C_TEST_MODIFY_SERVER_TIME.verify|verify} messages.
         * @param message C_TEST_MODIFY_SERVER_TIME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_MODIFY_SERVER_TIME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_MODIFY_SERVER_TIME message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_MODIFY_SERVER_TIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_MODIFY_SERVER_TIME;

        /**
         * Decodes a C_TEST_MODIFY_SERVER_TIME message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_MODIFY_SERVER_TIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_MODIFY_SERVER_TIME;

        /**
         * Verifies a C_TEST_MODIFY_SERVER_TIME message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_MODIFY_SERVER_TIME message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_MODIFY_SERVER_TIME
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_MODIFY_SERVER_TIME;

        /**
         * Creates a plain object from a C_TEST_MODIFY_SERVER_TIME message. Also converts values to other types if specified.
         * @param message C_TEST_MODIFY_SERVER_TIME
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_MODIFY_SERVER_TIME, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_MODIFY_SERVER_TIME to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_RESTART_SERVER. */
    interface IC_TEST_RESTART_SERVER {

        /** C_TEST_RESTART_SERVER cmd */
        cmd?: (number|null);

        /** C_TEST_RESTART_SERVER scmd */
        scmd?: (number|null);
    }

    /** Represents a C_TEST_RESTART_SERVER. */
    class C_TEST_RESTART_SERVER implements IC_TEST_RESTART_SERVER {

        /**
         * Constructs a new C_TEST_RESTART_SERVER.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_RESTART_SERVER);

        /** C_TEST_RESTART_SERVER cmd. */
        public cmd: number;

        /** C_TEST_RESTART_SERVER scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_TEST_RESTART_SERVER message. Does not implicitly {@link TestPto.C_TEST_RESTART_SERVER.verify|verify} messages.
         * @param message C_TEST_RESTART_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_RESTART_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_RESTART_SERVER message, length delimited. Does not implicitly {@link TestPto.C_TEST_RESTART_SERVER.verify|verify} messages.
         * @param message C_TEST_RESTART_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_RESTART_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_RESTART_SERVER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_RESTART_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_RESTART_SERVER;

        /**
         * Decodes a C_TEST_RESTART_SERVER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_RESTART_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_RESTART_SERVER;

        /**
         * Verifies a C_TEST_RESTART_SERVER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_RESTART_SERVER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_RESTART_SERVER
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_RESTART_SERVER;

        /**
         * Creates a plain object from a C_TEST_RESTART_SERVER message. Also converts values to other types if specified.
         * @param message C_TEST_RESTART_SERVER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_RESTART_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_RESTART_SERVER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_SERVER_TIME_INFO. */
    interface IC_TEST_SERVER_TIME_INFO {

        /** C_TEST_SERVER_TIME_INFO cmd */
        cmd?: (number|null);

        /** C_TEST_SERVER_TIME_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_TEST_SERVER_TIME_INFO. */
    class C_TEST_SERVER_TIME_INFO implements IC_TEST_SERVER_TIME_INFO {

        /**
         * Constructs a new C_TEST_SERVER_TIME_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_SERVER_TIME_INFO);

        /** C_TEST_SERVER_TIME_INFO cmd. */
        public cmd: number;

        /** C_TEST_SERVER_TIME_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_TEST_SERVER_TIME_INFO message. Does not implicitly {@link TestPto.C_TEST_SERVER_TIME_INFO.verify|verify} messages.
         * @param message C_TEST_SERVER_TIME_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_SERVER_TIME_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_SERVER_TIME_INFO message, length delimited. Does not implicitly {@link TestPto.C_TEST_SERVER_TIME_INFO.verify|verify} messages.
         * @param message C_TEST_SERVER_TIME_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_SERVER_TIME_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_SERVER_TIME_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_SERVER_TIME_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_SERVER_TIME_INFO;

        /**
         * Decodes a C_TEST_SERVER_TIME_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_SERVER_TIME_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_SERVER_TIME_INFO;

        /**
         * Verifies a C_TEST_SERVER_TIME_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_SERVER_TIME_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_SERVER_TIME_INFO
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_SERVER_TIME_INFO;

        /**
         * Creates a plain object from a C_TEST_SERVER_TIME_INFO message. Also converts values to other types if specified.
         * @param message C_TEST_SERVER_TIME_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_SERVER_TIME_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_SERVER_TIME_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_TEST_SERVER_TIME_INFO. */
    interface IS_TEST_SERVER_TIME_INFO {

        /** S_TEST_SERVER_TIME_INFO cmd */
        cmd?: (number|null);

        /** S_TEST_SERVER_TIME_INFO scmd */
        scmd?: (number|null);

        /** S_TEST_SERVER_TIME_INFO serverTime */
        serverTime?: (number|null);

        /** S_TEST_SERVER_TIME_INFO openServerDay */
        openServerDay?: (number|null);

        /** S_TEST_SERVER_TIME_INFO openServerWeek */
        openServerWeek?: (number|null);
    }

    /** Represents a S_TEST_SERVER_TIME_INFO. */
    class S_TEST_SERVER_TIME_INFO implements IS_TEST_SERVER_TIME_INFO {

        /**
         * Constructs a new S_TEST_SERVER_TIME_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IS_TEST_SERVER_TIME_INFO);

        /** S_TEST_SERVER_TIME_INFO cmd. */
        public cmd: number;

        /** S_TEST_SERVER_TIME_INFO scmd. */
        public scmd: number;

        /** S_TEST_SERVER_TIME_INFO serverTime. */
        public serverTime: number;

        /** S_TEST_SERVER_TIME_INFO openServerDay. */
        public openServerDay: number;

        /** S_TEST_SERVER_TIME_INFO openServerWeek. */
        public openServerWeek: number;

        /**
         * Encodes the specified S_TEST_SERVER_TIME_INFO message. Does not implicitly {@link TestPto.S_TEST_SERVER_TIME_INFO.verify|verify} messages.
         * @param message S_TEST_SERVER_TIME_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IS_TEST_SERVER_TIME_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_TEST_SERVER_TIME_INFO message, length delimited. Does not implicitly {@link TestPto.S_TEST_SERVER_TIME_INFO.verify|verify} messages.
         * @param message S_TEST_SERVER_TIME_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IS_TEST_SERVER_TIME_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_TEST_SERVER_TIME_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_TEST_SERVER_TIME_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.S_TEST_SERVER_TIME_INFO;

        /**
         * Decodes a S_TEST_SERVER_TIME_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_TEST_SERVER_TIME_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.S_TEST_SERVER_TIME_INFO;

        /**
         * Verifies a S_TEST_SERVER_TIME_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_TEST_SERVER_TIME_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_TEST_SERVER_TIME_INFO
         */
        public static fromObject(object: { [k: string]: any }): TestPto.S_TEST_SERVER_TIME_INFO;

        /**
         * Creates a plain object from a S_TEST_SERVER_TIME_INFO message. Also converts values to other types if specified.
         * @param message S_TEST_SERVER_TIME_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.S_TEST_SERVER_TIME_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_TEST_SERVER_TIME_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_CLEAR_ACCOUNT_DATA. */
    interface IC_TEST_CLEAR_ACCOUNT_DATA {

        /** C_TEST_CLEAR_ACCOUNT_DATA cmd */
        cmd?: (number|null);

        /** C_TEST_CLEAR_ACCOUNT_DATA scmd */
        scmd?: (number|null);
    }

    /** Represents a C_TEST_CLEAR_ACCOUNT_DATA. */
    class C_TEST_CLEAR_ACCOUNT_DATA implements IC_TEST_CLEAR_ACCOUNT_DATA {

        /**
         * Constructs a new C_TEST_CLEAR_ACCOUNT_DATA.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_CLEAR_ACCOUNT_DATA);

        /** C_TEST_CLEAR_ACCOUNT_DATA cmd. */
        public cmd: number;

        /** C_TEST_CLEAR_ACCOUNT_DATA scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_TEST_CLEAR_ACCOUNT_DATA message. Does not implicitly {@link TestPto.C_TEST_CLEAR_ACCOUNT_DATA.verify|verify} messages.
         * @param message C_TEST_CLEAR_ACCOUNT_DATA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_CLEAR_ACCOUNT_DATA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_CLEAR_ACCOUNT_DATA message, length delimited. Does not implicitly {@link TestPto.C_TEST_CLEAR_ACCOUNT_DATA.verify|verify} messages.
         * @param message C_TEST_CLEAR_ACCOUNT_DATA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_CLEAR_ACCOUNT_DATA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_CLEAR_ACCOUNT_DATA message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_CLEAR_ACCOUNT_DATA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_CLEAR_ACCOUNT_DATA;

        /**
         * Decodes a C_TEST_CLEAR_ACCOUNT_DATA message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_CLEAR_ACCOUNT_DATA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_CLEAR_ACCOUNT_DATA;

        /**
         * Verifies a C_TEST_CLEAR_ACCOUNT_DATA message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_CLEAR_ACCOUNT_DATA message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_CLEAR_ACCOUNT_DATA
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_CLEAR_ACCOUNT_DATA;

        /**
         * Creates a plain object from a C_TEST_CLEAR_ACCOUNT_DATA message. Also converts values to other types if specified.
         * @param message C_TEST_CLEAR_ACCOUNT_DATA
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_CLEAR_ACCOUNT_DATA, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_CLEAR_ACCOUNT_DATA to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace PlayerPto. */
export namespace PlayerPto {

    /** Properties of a LoginInfo. */
    interface ILoginInfo {

        /** LoginInfo code */
        code?: (number|null);

        /** LoginInfo serverId */
        serverId?: (number|null);

        /** LoginInfo userId */
        userId?: (string|null);

        /** LoginInfo stageId */
        stageId?: (number|null);
    }

    /** Represents a LoginInfo. */
    class LoginInfo implements ILoginInfo {

        /**
         * Constructs a new LoginInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerPto.ILoginInfo);

        /** LoginInfo code. */
        public code: number;

        /** LoginInfo serverId. */
        public serverId: number;

        /** LoginInfo userId. */
        public userId: string;

        /** LoginInfo stageId. */
        public stageId: number;

        /**
         * Encodes the specified LoginInfo message. Does not implicitly {@link PlayerPto.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PlayerPto.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginInfo message, length delimited. Does not implicitly {@link PlayerPto.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PlayerPto.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerPto.LoginInfo;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerPto.LoginInfo;

        /**
         * Verifies a LoginInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginInfo
         */
        public static fromObject(object: { [k: string]: any }): PlayerPto.LoginInfo;

        /**
         * Creates a plain object from a LoginInfo message. Also converts values to other types if specified.
         * @param message LoginInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerPto.LoginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace ItemPto. */
export namespace ItemPto {

    /** Properties of a C_GET_ITEMS_INFO. */
    interface IC_GET_ITEMS_INFO {

        /** C_GET_ITEMS_INFO cmd */
        cmd?: (number|null);

        /** C_GET_ITEMS_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_GET_ITEMS_INFO. */
    class C_GET_ITEMS_INFO implements IC_GET_ITEMS_INFO {

        /**
         * Constructs a new C_GET_ITEMS_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IC_GET_ITEMS_INFO);

        /** C_GET_ITEMS_INFO cmd. */
        public cmd: number;

        /** C_GET_ITEMS_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_GET_ITEMS_INFO message. Does not implicitly {@link ItemPto.C_GET_ITEMS_INFO.verify|verify} messages.
         * @param message C_GET_ITEMS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IC_GET_ITEMS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_ITEMS_INFO message, length delimited. Does not implicitly {@link ItemPto.C_GET_ITEMS_INFO.verify|verify} messages.
         * @param message C_GET_ITEMS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IC_GET_ITEMS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_ITEMS_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_ITEMS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.C_GET_ITEMS_INFO;

        /**
         * Decodes a C_GET_ITEMS_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_ITEMS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.C_GET_ITEMS_INFO;

        /**
         * Verifies a C_GET_ITEMS_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_ITEMS_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_ITEMS_INFO
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.C_GET_ITEMS_INFO;

        /**
         * Creates a plain object from a C_GET_ITEMS_INFO message. Also converts values to other types if specified.
         * @param message C_GET_ITEMS_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.C_GET_ITEMS_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_ITEMS_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_ITEMS_INFO. */
    interface IS_GET_ITEMS_INFO {

        /** S_GET_ITEMS_INFO cmd */
        cmd?: (number|null);

        /** S_GET_ITEMS_INFO scmd */
        scmd?: (number|null);

        /** S_GET_ITEMS_INFO items */
        items?: (ItemPto.IItem[]|null);
    }

    /** Represents a S_GET_ITEMS_INFO. */
    class S_GET_ITEMS_INFO implements IS_GET_ITEMS_INFO {

        /**
         * Constructs a new S_GET_ITEMS_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_GET_ITEMS_INFO);

        /** S_GET_ITEMS_INFO cmd. */
        public cmd: number;

        /** S_GET_ITEMS_INFO scmd. */
        public scmd: number;

        /** S_GET_ITEMS_INFO items. */
        public items: ItemPto.IItem[];

        /**
         * Encodes the specified S_GET_ITEMS_INFO message. Does not implicitly {@link ItemPto.S_GET_ITEMS_INFO.verify|verify} messages.
         * @param message S_GET_ITEMS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_GET_ITEMS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_ITEMS_INFO message, length delimited. Does not implicitly {@link ItemPto.S_GET_ITEMS_INFO.verify|verify} messages.
         * @param message S_GET_ITEMS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_GET_ITEMS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_ITEMS_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_ITEMS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_GET_ITEMS_INFO;

        /**
         * Decodes a S_GET_ITEMS_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_ITEMS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_GET_ITEMS_INFO;

        /**
         * Verifies a S_GET_ITEMS_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_ITEMS_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_ITEMS_INFO
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_GET_ITEMS_INFO;

        /**
         * Creates a plain object from a S_GET_ITEMS_INFO message. Also converts values to other types if specified.
         * @param message S_GET_ITEMS_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_GET_ITEMS_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_ITEMS_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ITEMS_UPDATE. */
    interface IS_ITEMS_UPDATE {

        /** S_ITEMS_UPDATE cmd */
        cmd?: (number|null);

        /** S_ITEMS_UPDATE scmd */
        scmd?: (number|null);

        /** S_ITEMS_UPDATE items */
        items?: (ItemPto.IItem[]|null);
    }

    /** Represents a S_ITEMS_UPDATE. */
    class S_ITEMS_UPDATE implements IS_ITEMS_UPDATE {

        /**
         * Constructs a new S_ITEMS_UPDATE.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_ITEMS_UPDATE);

        /** S_ITEMS_UPDATE cmd. */
        public cmd: number;

        /** S_ITEMS_UPDATE scmd. */
        public scmd: number;

        /** S_ITEMS_UPDATE items. */
        public items: ItemPto.IItem[];

        /**
         * Encodes the specified S_ITEMS_UPDATE message. Does not implicitly {@link ItemPto.S_ITEMS_UPDATE.verify|verify} messages.
         * @param message S_ITEMS_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_ITEMS_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ITEMS_UPDATE message, length delimited. Does not implicitly {@link ItemPto.S_ITEMS_UPDATE.verify|verify} messages.
         * @param message S_ITEMS_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_ITEMS_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ITEMS_UPDATE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ITEMS_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_ITEMS_UPDATE;

        /**
         * Decodes a S_ITEMS_UPDATE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ITEMS_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_ITEMS_UPDATE;

        /**
         * Verifies a S_ITEMS_UPDATE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ITEMS_UPDATE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ITEMS_UPDATE
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_ITEMS_UPDATE;

        /**
         * Creates a plain object from a S_ITEMS_UPDATE message. Also converts values to other types if specified.
         * @param message S_ITEMS_UPDATE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_ITEMS_UPDATE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ITEMS_UPDATE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_GET_ENERGY_INFO. */
    interface IC_GET_ENERGY_INFO {

        /** C_GET_ENERGY_INFO cmd */
        cmd?: (number|null);

        /** C_GET_ENERGY_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_GET_ENERGY_INFO. */
    class C_GET_ENERGY_INFO implements IC_GET_ENERGY_INFO {

        /**
         * Constructs a new C_GET_ENERGY_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IC_GET_ENERGY_INFO);

        /** C_GET_ENERGY_INFO cmd. */
        public cmd: number;

        /** C_GET_ENERGY_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_GET_ENERGY_INFO message. Does not implicitly {@link ItemPto.C_GET_ENERGY_INFO.verify|verify} messages.
         * @param message C_GET_ENERGY_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IC_GET_ENERGY_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_ENERGY_INFO message, length delimited. Does not implicitly {@link ItemPto.C_GET_ENERGY_INFO.verify|verify} messages.
         * @param message C_GET_ENERGY_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IC_GET_ENERGY_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_ENERGY_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_ENERGY_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.C_GET_ENERGY_INFO;

        /**
         * Decodes a C_GET_ENERGY_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_ENERGY_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.C_GET_ENERGY_INFO;

        /**
         * Verifies a C_GET_ENERGY_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_ENERGY_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_ENERGY_INFO
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.C_GET_ENERGY_INFO;

        /**
         * Creates a plain object from a C_GET_ENERGY_INFO message. Also converts values to other types if specified.
         * @param message C_GET_ENERGY_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.C_GET_ENERGY_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_ENERGY_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_ENERGY_INFO. */
    interface IS_GET_ENERGY_INFO {

        /** S_GET_ENERGY_INFO cmd */
        cmd?: (number|null);

        /** S_GET_ENERGY_INFO scmd */
        scmd?: (number|null);

        /** S_GET_ENERGY_INFO energyList */
        energyList?: (ItemPto.IEnergy[]|null);
    }

    /** Represents a S_GET_ENERGY_INFO. */
    class S_GET_ENERGY_INFO implements IS_GET_ENERGY_INFO {

        /**
         * Constructs a new S_GET_ENERGY_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_GET_ENERGY_INFO);

        /** S_GET_ENERGY_INFO cmd. */
        public cmd: number;

        /** S_GET_ENERGY_INFO scmd. */
        public scmd: number;

        /** S_GET_ENERGY_INFO energyList. */
        public energyList: ItemPto.IEnergy[];

        /**
         * Encodes the specified S_GET_ENERGY_INFO message. Does not implicitly {@link ItemPto.S_GET_ENERGY_INFO.verify|verify} messages.
         * @param message S_GET_ENERGY_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_GET_ENERGY_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_ENERGY_INFO message, length delimited. Does not implicitly {@link ItemPto.S_GET_ENERGY_INFO.verify|verify} messages.
         * @param message S_GET_ENERGY_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_GET_ENERGY_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_ENERGY_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_ENERGY_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_GET_ENERGY_INFO;

        /**
         * Decodes a S_GET_ENERGY_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_ENERGY_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_GET_ENERGY_INFO;

        /**
         * Verifies a S_GET_ENERGY_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_ENERGY_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_ENERGY_INFO
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_GET_ENERGY_INFO;

        /**
         * Creates a plain object from a S_GET_ENERGY_INFO message. Also converts values to other types if specified.
         * @param message S_GET_ENERGY_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_GET_ENERGY_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_ENERGY_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ENERGY_UPDATE. */
    interface IS_ENERGY_UPDATE {

        /** S_ENERGY_UPDATE cmd */
        cmd?: (number|null);

        /** S_ENERGY_UPDATE scmd */
        scmd?: (number|null);

        /** S_ENERGY_UPDATE energy */
        energy?: (ItemPto.IEnergy|null);
    }

    /** Represents a S_ENERGY_UPDATE. */
    class S_ENERGY_UPDATE implements IS_ENERGY_UPDATE {

        /**
         * Constructs a new S_ENERGY_UPDATE.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_ENERGY_UPDATE);

        /** S_ENERGY_UPDATE cmd. */
        public cmd: number;

        /** S_ENERGY_UPDATE scmd. */
        public scmd: number;

        /** S_ENERGY_UPDATE energy. */
        public energy?: (ItemPto.IEnergy|null);

        /**
         * Encodes the specified S_ENERGY_UPDATE message. Does not implicitly {@link ItemPto.S_ENERGY_UPDATE.verify|verify} messages.
         * @param message S_ENERGY_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_ENERGY_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ENERGY_UPDATE message, length delimited. Does not implicitly {@link ItemPto.S_ENERGY_UPDATE.verify|verify} messages.
         * @param message S_ENERGY_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_ENERGY_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ENERGY_UPDATE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ENERGY_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_ENERGY_UPDATE;

        /**
         * Decodes a S_ENERGY_UPDATE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ENERGY_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_ENERGY_UPDATE;

        /**
         * Verifies a S_ENERGY_UPDATE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ENERGY_UPDATE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ENERGY_UPDATE
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_ENERGY_UPDATE;

        /**
         * Creates a plain object from a S_ENERGY_UPDATE message. Also converts values to other types if specified.
         * @param message S_ENERGY_UPDATE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_ENERGY_UPDATE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ENERGY_UPDATE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_USE_ITEMS. */
    interface IC_USE_ITEMS {

        /** C_USE_ITEMS cmd */
        cmd?: (number|null);

        /** C_USE_ITEMS scmd */
        scmd?: (number|null);

        /** C_USE_ITEMS itemId */
        itemId?: (number|null);

        /** C_USE_ITEMS count */
        count?: (number|null);

        /** C_USE_ITEMS selectIndex */
        selectIndex?: (number|null);
    }

    /** Represents a C_USE_ITEMS. */
    class C_USE_ITEMS implements IC_USE_ITEMS {

        /**
         * Constructs a new C_USE_ITEMS.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IC_USE_ITEMS);

        /** C_USE_ITEMS cmd. */
        public cmd: number;

        /** C_USE_ITEMS scmd. */
        public scmd: number;

        /** C_USE_ITEMS itemId. */
        public itemId: number;

        /** C_USE_ITEMS count. */
        public count: number;

        /** C_USE_ITEMS selectIndex. */
        public selectIndex: number;

        /**
         * Encodes the specified C_USE_ITEMS message. Does not implicitly {@link ItemPto.C_USE_ITEMS.verify|verify} messages.
         * @param message C_USE_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IC_USE_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_USE_ITEMS message, length delimited. Does not implicitly {@link ItemPto.C_USE_ITEMS.verify|verify} messages.
         * @param message C_USE_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IC_USE_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_USE_ITEMS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_USE_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.C_USE_ITEMS;

        /**
         * Decodes a C_USE_ITEMS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_USE_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.C_USE_ITEMS;

        /**
         * Verifies a C_USE_ITEMS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_USE_ITEMS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_USE_ITEMS
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.C_USE_ITEMS;

        /**
         * Creates a plain object from a C_USE_ITEMS message. Also converts values to other types if specified.
         * @param message C_USE_ITEMS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.C_USE_ITEMS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_USE_ITEMS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_USE_ITEMS. */
    interface IS_USE_ITEMS {

        /** S_USE_ITEMS cmd */
        cmd?: (number|null);

        /** S_USE_ITEMS scmd */
        scmd?: (number|null);

        /** S_USE_ITEMS items */
        items?: (ItemPto.IItem[]|null);
    }

    /** Represents a S_USE_ITEMS. */
    class S_USE_ITEMS implements IS_USE_ITEMS {

        /**
         * Constructs a new S_USE_ITEMS.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_USE_ITEMS);

        /** S_USE_ITEMS cmd. */
        public cmd: number;

        /** S_USE_ITEMS scmd. */
        public scmd: number;

        /** S_USE_ITEMS items. */
        public items: ItemPto.IItem[];

        /**
         * Encodes the specified S_USE_ITEMS message. Does not implicitly {@link ItemPto.S_USE_ITEMS.verify|verify} messages.
         * @param message S_USE_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_USE_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_USE_ITEMS message, length delimited. Does not implicitly {@link ItemPto.S_USE_ITEMS.verify|verify} messages.
         * @param message S_USE_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_USE_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_USE_ITEMS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_USE_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_USE_ITEMS;

        /**
         * Decodes a S_USE_ITEMS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_USE_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_USE_ITEMS;

        /**
         * Verifies a S_USE_ITEMS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_USE_ITEMS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_USE_ITEMS
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_USE_ITEMS;

        /**
         * Creates a plain object from a S_USE_ITEMS message. Also converts values to other types if specified.
         * @param message S_USE_ITEMS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_USE_ITEMS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_USE_ITEMS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_CLEAR_NEW_TAG. */
    interface IC_CLEAR_NEW_TAG {

        /** C_CLEAR_NEW_TAG cmd */
        cmd?: (number|null);

        /** C_CLEAR_NEW_TAG scmd */
        scmd?: (number|null);

        /** C_CLEAR_NEW_TAG itemId */
        itemId?: (number|null);
    }

    /** Represents a C_CLEAR_NEW_TAG. */
    class C_CLEAR_NEW_TAG implements IC_CLEAR_NEW_TAG {

        /**
         * Constructs a new C_CLEAR_NEW_TAG.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IC_CLEAR_NEW_TAG);

        /** C_CLEAR_NEW_TAG cmd. */
        public cmd: number;

        /** C_CLEAR_NEW_TAG scmd. */
        public scmd: number;

        /** C_CLEAR_NEW_TAG itemId. */
        public itemId: number;

        /**
         * Encodes the specified C_CLEAR_NEW_TAG message. Does not implicitly {@link ItemPto.C_CLEAR_NEW_TAG.verify|verify} messages.
         * @param message C_CLEAR_NEW_TAG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IC_CLEAR_NEW_TAG, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CLEAR_NEW_TAG message, length delimited. Does not implicitly {@link ItemPto.C_CLEAR_NEW_TAG.verify|verify} messages.
         * @param message C_CLEAR_NEW_TAG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IC_CLEAR_NEW_TAG, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CLEAR_NEW_TAG message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CLEAR_NEW_TAG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.C_CLEAR_NEW_TAG;

        /**
         * Decodes a C_CLEAR_NEW_TAG message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CLEAR_NEW_TAG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.C_CLEAR_NEW_TAG;

        /**
         * Verifies a C_CLEAR_NEW_TAG message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_CLEAR_NEW_TAG message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_CLEAR_NEW_TAG
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.C_CLEAR_NEW_TAG;

        /**
         * Creates a plain object from a C_CLEAR_NEW_TAG message. Also converts values to other types if specified.
         * @param message C_CLEAR_NEW_TAG
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.C_CLEAR_NEW_TAG, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_CLEAR_NEW_TAG to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item itemId */
        itemId?: (number|null);

        /** Item count */
        count?: (number|null);

        /** Item isNew */
        isNew?: (boolean|null);

        /** Item expireTime */
        expireTime?: (number|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IItem);

        /** Item itemId. */
        public itemId: number;

        /** Item count. */
        public count: number;

        /** Item isNew. */
        public isNew: boolean;

        /** Item expireTime. */
        public expireTime: number;

        /**
         * Encodes the specified Item message. Does not implicitly {@link ItemPto.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link ItemPto.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Energy. */
    interface IEnergy {

        /** Energy itemId */
        itemId?: (number|null);

        /** Energy count */
        count?: (number|null);

        /** Energy nextRecoverTime */
        nextRecoverTime?: (number|null);
    }

    /** Represents an Energy. */
    class Energy implements IEnergy {

        /**
         * Constructs a new Energy.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IEnergy);

        /** Energy itemId. */
        public itemId: number;

        /** Energy count. */
        public count: number;

        /** Energy nextRecoverTime. */
        public nextRecoverTime: number;

        /**
         * Encodes the specified Energy message. Does not implicitly {@link ItemPto.Energy.verify|verify} messages.
         * @param message Energy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IEnergy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Energy message, length delimited. Does not implicitly {@link ItemPto.Energy.verify|verify} messages.
         * @param message Energy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IEnergy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Energy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Energy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.Energy;

        /**
         * Decodes an Energy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Energy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.Energy;

        /**
         * Verifies an Energy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Energy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Energy
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.Energy;

        /**
         * Creates a plain object from an Energy message. Also converts values to other types if specified.
         * @param message Energy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.Energy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Energy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace MatchPto. */
export namespace MatchPto {

    /** Properties of a C_START_MATCHING. */
    interface IC_START_MATCHING {

        /** C_START_MATCHING cmd */
        cmd?: (number|null);

        /** C_START_MATCHING scmd */
        scmd?: (number|null);

        /** C_START_MATCHING type */
        type?: (MatchPto.MatchTypeEnum|null);
    }

    /** Represents a C_START_MATCHING. */
    class C_START_MATCHING implements IC_START_MATCHING {

        /**
         * Constructs a new C_START_MATCHING.
         * @param [properties] Properties to set
         */
        constructor(properties?: MatchPto.IC_START_MATCHING);

        /** C_START_MATCHING cmd. */
        public cmd: number;

        /** C_START_MATCHING scmd. */
        public scmd: number;

        /** C_START_MATCHING type. */
        public type: MatchPto.MatchTypeEnum;

        /**
         * Encodes the specified C_START_MATCHING message. Does not implicitly {@link MatchPto.C_START_MATCHING.verify|verify} messages.
         * @param message C_START_MATCHING message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MatchPto.IC_START_MATCHING, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_START_MATCHING message, length delimited. Does not implicitly {@link MatchPto.C_START_MATCHING.verify|verify} messages.
         * @param message C_START_MATCHING message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MatchPto.IC_START_MATCHING, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_START_MATCHING message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_START_MATCHING
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchPto.C_START_MATCHING;

        /**
         * Decodes a C_START_MATCHING message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_START_MATCHING
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchPto.C_START_MATCHING;

        /**
         * Verifies a C_START_MATCHING message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_START_MATCHING message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_START_MATCHING
         */
        public static fromObject(object: { [k: string]: any }): MatchPto.C_START_MATCHING;

        /**
         * Creates a plain object from a C_START_MATCHING message. Also converts values to other types if specified.
         * @param message C_START_MATCHING
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MatchPto.C_START_MATCHING, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_START_MATCHING to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_START_MATCHING. */
    interface IS_START_MATCHING {

        /** S_START_MATCHING cmd */
        cmd?: (number|null);

        /** S_START_MATCHING scmd */
        scmd?: (number|null);
    }

    /** Represents a S_START_MATCHING. */
    class S_START_MATCHING implements IS_START_MATCHING {

        /**
         * Constructs a new S_START_MATCHING.
         * @param [properties] Properties to set
         */
        constructor(properties?: MatchPto.IS_START_MATCHING);

        /** S_START_MATCHING cmd. */
        public cmd: number;

        /** S_START_MATCHING scmd. */
        public scmd: number;

        /**
         * Encodes the specified S_START_MATCHING message. Does not implicitly {@link MatchPto.S_START_MATCHING.verify|verify} messages.
         * @param message S_START_MATCHING message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MatchPto.IS_START_MATCHING, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_START_MATCHING message, length delimited. Does not implicitly {@link MatchPto.S_START_MATCHING.verify|verify} messages.
         * @param message S_START_MATCHING message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MatchPto.IS_START_MATCHING, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_START_MATCHING message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_START_MATCHING
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchPto.S_START_MATCHING;

        /**
         * Decodes a S_START_MATCHING message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_START_MATCHING
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchPto.S_START_MATCHING;

        /**
         * Verifies a S_START_MATCHING message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_START_MATCHING message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_START_MATCHING
         */
        public static fromObject(object: { [k: string]: any }): MatchPto.S_START_MATCHING;

        /**
         * Creates a plain object from a S_START_MATCHING message. Also converts values to other types if specified.
         * @param message S_START_MATCHING
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MatchPto.S_START_MATCHING, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_START_MATCHING to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_CANCEL_MATCHING. */
    interface IC_CANCEL_MATCHING {

        /** C_CANCEL_MATCHING cmd */
        cmd?: (number|null);

        /** C_CANCEL_MATCHING scmd */
        scmd?: (number|null);

        /** C_CANCEL_MATCHING type */
        type?: (MatchPto.MatchTypeEnum|null);
    }

    /** Represents a C_CANCEL_MATCHING. */
    class C_CANCEL_MATCHING implements IC_CANCEL_MATCHING {

        /**
         * Constructs a new C_CANCEL_MATCHING.
         * @param [properties] Properties to set
         */
        constructor(properties?: MatchPto.IC_CANCEL_MATCHING);

        /** C_CANCEL_MATCHING cmd. */
        public cmd: number;

        /** C_CANCEL_MATCHING scmd. */
        public scmd: number;

        /** C_CANCEL_MATCHING type. */
        public type: MatchPto.MatchTypeEnum;

        /**
         * Encodes the specified C_CANCEL_MATCHING message. Does not implicitly {@link MatchPto.C_CANCEL_MATCHING.verify|verify} messages.
         * @param message C_CANCEL_MATCHING message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MatchPto.IC_CANCEL_MATCHING, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CANCEL_MATCHING message, length delimited. Does not implicitly {@link MatchPto.C_CANCEL_MATCHING.verify|verify} messages.
         * @param message C_CANCEL_MATCHING message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MatchPto.IC_CANCEL_MATCHING, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CANCEL_MATCHING message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CANCEL_MATCHING
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchPto.C_CANCEL_MATCHING;

        /**
         * Decodes a C_CANCEL_MATCHING message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CANCEL_MATCHING
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchPto.C_CANCEL_MATCHING;

        /**
         * Verifies a C_CANCEL_MATCHING message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_CANCEL_MATCHING message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_CANCEL_MATCHING
         */
        public static fromObject(object: { [k: string]: any }): MatchPto.C_CANCEL_MATCHING;

        /**
         * Creates a plain object from a C_CANCEL_MATCHING message. Also converts values to other types if specified.
         * @param message C_CANCEL_MATCHING
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MatchPto.C_CANCEL_MATCHING, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_CANCEL_MATCHING to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_CANCEL_MATCHING. */
    interface IS_CANCEL_MATCHING {

        /** S_CANCEL_MATCHING cmd */
        cmd?: (number|null);

        /** S_CANCEL_MATCHING scmd */
        scmd?: (number|null);
    }

    /** Represents a S_CANCEL_MATCHING. */
    class S_CANCEL_MATCHING implements IS_CANCEL_MATCHING {

        /**
         * Constructs a new S_CANCEL_MATCHING.
         * @param [properties] Properties to set
         */
        constructor(properties?: MatchPto.IS_CANCEL_MATCHING);

        /** S_CANCEL_MATCHING cmd. */
        public cmd: number;

        /** S_CANCEL_MATCHING scmd. */
        public scmd: number;

        /**
         * Encodes the specified S_CANCEL_MATCHING message. Does not implicitly {@link MatchPto.S_CANCEL_MATCHING.verify|verify} messages.
         * @param message S_CANCEL_MATCHING message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MatchPto.IS_CANCEL_MATCHING, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CANCEL_MATCHING message, length delimited. Does not implicitly {@link MatchPto.S_CANCEL_MATCHING.verify|verify} messages.
         * @param message S_CANCEL_MATCHING message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MatchPto.IS_CANCEL_MATCHING, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CANCEL_MATCHING message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CANCEL_MATCHING
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchPto.S_CANCEL_MATCHING;

        /**
         * Decodes a S_CANCEL_MATCHING message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CANCEL_MATCHING
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchPto.S_CANCEL_MATCHING;

        /**
         * Verifies a S_CANCEL_MATCHING message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_CANCEL_MATCHING message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_CANCEL_MATCHING
         */
        public static fromObject(object: { [k: string]: any }): MatchPto.S_CANCEL_MATCHING;

        /**
         * Creates a plain object from a S_CANCEL_MATCHING message. Also converts values to other types if specified.
         * @param message S_CANCEL_MATCHING
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MatchPto.S_CANCEL_MATCHING, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_CANCEL_MATCHING to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_MATCH_SUCCESS. */
    interface IS_MATCH_SUCCESS {

        /** S_MATCH_SUCCESS cmd */
        cmd?: (number|null);

        /** S_MATCH_SUCCESS scmd */
        scmd?: (number|null);

        /** S_MATCH_SUCCESS battleToken */
        battleToken?: (string|null);

        /** S_MATCH_SUCCESS address */
        address?: (string|null);

        /** S_MATCH_SUCCESS expireTime */
        expireTime?: (number|null);
    }

    /** Represents a S_MATCH_SUCCESS. */
    class S_MATCH_SUCCESS implements IS_MATCH_SUCCESS {

        /**
         * Constructs a new S_MATCH_SUCCESS.
         * @param [properties] Properties to set
         */
        constructor(properties?: MatchPto.IS_MATCH_SUCCESS);

        /** S_MATCH_SUCCESS cmd. */
        public cmd: number;

        /** S_MATCH_SUCCESS scmd. */
        public scmd: number;

        /** S_MATCH_SUCCESS battleToken. */
        public battleToken: string;

        /** S_MATCH_SUCCESS address. */
        public address: string;

        /** S_MATCH_SUCCESS expireTime. */
        public expireTime: number;

        /**
         * Encodes the specified S_MATCH_SUCCESS message. Does not implicitly {@link MatchPto.S_MATCH_SUCCESS.verify|verify} messages.
         * @param message S_MATCH_SUCCESS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MatchPto.IS_MATCH_SUCCESS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_MATCH_SUCCESS message, length delimited. Does not implicitly {@link MatchPto.S_MATCH_SUCCESS.verify|verify} messages.
         * @param message S_MATCH_SUCCESS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MatchPto.IS_MATCH_SUCCESS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_MATCH_SUCCESS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_MATCH_SUCCESS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchPto.S_MATCH_SUCCESS;

        /**
         * Decodes a S_MATCH_SUCCESS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_MATCH_SUCCESS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchPto.S_MATCH_SUCCESS;

        /**
         * Verifies a S_MATCH_SUCCESS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_MATCH_SUCCESS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_MATCH_SUCCESS
         */
        public static fromObject(object: { [k: string]: any }): MatchPto.S_MATCH_SUCCESS;

        /**
         * Creates a plain object from a S_MATCH_SUCCESS message. Also converts values to other types if specified.
         * @param message S_MATCH_SUCCESS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MatchPto.S_MATCH_SUCCESS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_MATCH_SUCCESS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MatchTypeEnum enum. */
    enum MatchTypeEnum {
        Normal = 0,
        Rank = 1
    }
}

/** Namespace BattlePto. */
export namespace BattlePto {

    /** Properties of a C_BATTLE_REGIEST. */
    interface IC_BATTLE_REGIEST {

        /** C_BATTLE_REGIEST cmd */
        cmd?: (number|null);

        /** C_BATTLE_REGIEST scmd */
        scmd?: (number|null);

        /** C_BATTLE_REGIEST battleToken */
        battleToken?: (string|null);

        /** C_BATTLE_REGIEST userId */
        userId?: (string|null);
    }

    /** Represents a C_BATTLE_REGIEST. */
    class C_BATTLE_REGIEST implements IC_BATTLE_REGIEST {

        /**
         * Constructs a new C_BATTLE_REGIEST.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IC_BATTLE_REGIEST);

        /** C_BATTLE_REGIEST cmd. */
        public cmd: number;

        /** C_BATTLE_REGIEST scmd. */
        public scmd: number;

        /** C_BATTLE_REGIEST battleToken. */
        public battleToken: string;

        /** C_BATTLE_REGIEST userId. */
        public userId: string;

        /**
         * Encodes the specified C_BATTLE_REGIEST message. Does not implicitly {@link BattlePto.C_BATTLE_REGIEST.verify|verify} messages.
         * @param message C_BATTLE_REGIEST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IC_BATTLE_REGIEST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_BATTLE_REGIEST message, length delimited. Does not implicitly {@link BattlePto.C_BATTLE_REGIEST.verify|verify} messages.
         * @param message C_BATTLE_REGIEST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IC_BATTLE_REGIEST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_BATTLE_REGIEST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_BATTLE_REGIEST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.C_BATTLE_REGIEST;

        /**
         * Decodes a C_BATTLE_REGIEST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_BATTLE_REGIEST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.C_BATTLE_REGIEST;

        /**
         * Verifies a C_BATTLE_REGIEST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_BATTLE_REGIEST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_BATTLE_REGIEST
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.C_BATTLE_REGIEST;

        /**
         * Creates a plain object from a C_BATTLE_REGIEST message. Also converts values to other types if specified.
         * @param message C_BATTLE_REGIEST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.C_BATTLE_REGIEST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_BATTLE_REGIEST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_BATTLE_EXPIRE. */
    interface IS_BATTLE_EXPIRE {

        /** S_BATTLE_EXPIRE cmd */
        cmd?: (number|null);

        /** S_BATTLE_EXPIRE scmd */
        scmd?: (number|null);
    }

    /** Represents a S_BATTLE_EXPIRE. */
    class S_BATTLE_EXPIRE implements IS_BATTLE_EXPIRE {

        /**
         * Constructs a new S_BATTLE_EXPIRE.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IS_BATTLE_EXPIRE);

        /** S_BATTLE_EXPIRE cmd. */
        public cmd: number;

        /** S_BATTLE_EXPIRE scmd. */
        public scmd: number;

        /**
         * Encodes the specified S_BATTLE_EXPIRE message. Does not implicitly {@link BattlePto.S_BATTLE_EXPIRE.verify|verify} messages.
         * @param message S_BATTLE_EXPIRE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IS_BATTLE_EXPIRE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BATTLE_EXPIRE message, length delimited. Does not implicitly {@link BattlePto.S_BATTLE_EXPIRE.verify|verify} messages.
         * @param message S_BATTLE_EXPIRE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IS_BATTLE_EXPIRE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BATTLE_EXPIRE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BATTLE_EXPIRE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.S_BATTLE_EXPIRE;

        /**
         * Decodes a S_BATTLE_EXPIRE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BATTLE_EXPIRE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.S_BATTLE_EXPIRE;

        /**
         * Verifies a S_BATTLE_EXPIRE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_BATTLE_EXPIRE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_BATTLE_EXPIRE
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.S_BATTLE_EXPIRE;

        /**
         * Creates a plain object from a S_BATTLE_EXPIRE message. Also converts values to other types if specified.
         * @param message S_BATTLE_EXPIRE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.S_BATTLE_EXPIRE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BATTLE_EXPIRE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_BATTLE_ERROR. */
    interface IS_BATTLE_ERROR {

        /** S_BATTLE_ERROR cmd */
        cmd?: (number|null);

        /** S_BATTLE_ERROR scmd */
        scmd?: (number|null);
    }

    /** Represents a S_BATTLE_ERROR. */
    class S_BATTLE_ERROR implements IS_BATTLE_ERROR {

        /**
         * Constructs a new S_BATTLE_ERROR.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IS_BATTLE_ERROR);

        /** S_BATTLE_ERROR cmd. */
        public cmd: number;

        /** S_BATTLE_ERROR scmd. */
        public scmd: number;

        /**
         * Encodes the specified S_BATTLE_ERROR message. Does not implicitly {@link BattlePto.S_BATTLE_ERROR.verify|verify} messages.
         * @param message S_BATTLE_ERROR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IS_BATTLE_ERROR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BATTLE_ERROR message, length delimited. Does not implicitly {@link BattlePto.S_BATTLE_ERROR.verify|verify} messages.
         * @param message S_BATTLE_ERROR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IS_BATTLE_ERROR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BATTLE_ERROR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BATTLE_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.S_BATTLE_ERROR;

        /**
         * Decodes a S_BATTLE_ERROR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BATTLE_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.S_BATTLE_ERROR;

        /**
         * Verifies a S_BATTLE_ERROR message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_BATTLE_ERROR message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_BATTLE_ERROR
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.S_BATTLE_ERROR;

        /**
         * Creates a plain object from a S_BATTLE_ERROR message. Also converts values to other types if specified.
         * @param message S_BATTLE_ERROR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.S_BATTLE_ERROR, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BATTLE_ERROR to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_BATTLE_START. */
    interface IS_BATTLE_START {

        /** S_BATTLE_START cmd */
        cmd?: (number|null);

        /** S_BATTLE_START scmd */
        scmd?: (number|null);

        /** S_BATTLE_START mapId */
        mapId?: (number|null);

        /** S_BATTLE_START userId1 */
        userId1?: (string|null);

        /** S_BATTLE_START userId2 */
        userId2?: (string|null);

        /** S_BATTLE_START seed */
        seed?: (number|null);

        /** S_BATTLE_START frameRate */
        frameRate?: (number|null);
    }

    /** Represents a S_BATTLE_START. */
    class S_BATTLE_START implements IS_BATTLE_START {

        /**
         * Constructs a new S_BATTLE_START.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IS_BATTLE_START);

        /** S_BATTLE_START cmd. */
        public cmd: number;

        /** S_BATTLE_START scmd. */
        public scmd: number;

        /** S_BATTLE_START mapId. */
        public mapId: number;

        /** S_BATTLE_START userId1. */
        public userId1: string;

        /** S_BATTLE_START userId2. */
        public userId2: string;

        /** S_BATTLE_START seed. */
        public seed: number;

        /** S_BATTLE_START frameRate. */
        public frameRate: number;

        /**
         * Encodes the specified S_BATTLE_START message. Does not implicitly {@link BattlePto.S_BATTLE_START.verify|verify} messages.
         * @param message S_BATTLE_START message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IS_BATTLE_START, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BATTLE_START message, length delimited. Does not implicitly {@link BattlePto.S_BATTLE_START.verify|verify} messages.
         * @param message S_BATTLE_START message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IS_BATTLE_START, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BATTLE_START message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BATTLE_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.S_BATTLE_START;

        /**
         * Decodes a S_BATTLE_START message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BATTLE_START
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.S_BATTLE_START;

        /**
         * Verifies a S_BATTLE_START message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_BATTLE_START message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_BATTLE_START
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.S_BATTLE_START;

        /**
         * Creates a plain object from a S_BATTLE_START message. Also converts values to other types if specified.
         * @param message S_BATTLE_START
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.S_BATTLE_START, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BATTLE_START to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_BATTLE_LOGIC_FRAME. */
    interface IS_BATTLE_LOGIC_FRAME {

        /** S_BATTLE_LOGIC_FRAME cmd */
        cmd?: (number|null);

        /** S_BATTLE_LOGIC_FRAME scmd */
        scmd?: (number|null);

        /** S_BATTLE_LOGIC_FRAME dispatchInfos */
        dispatchInfos?: (BattlePto.IDispatchInfo[]|null);

        /** S_BATTLE_LOGIC_FRAME leastStartFrame */
        leastStartFrame?: (number|null);
    }

    /** Represents a S_BATTLE_LOGIC_FRAME. */
    class S_BATTLE_LOGIC_FRAME implements IS_BATTLE_LOGIC_FRAME {

        /**
         * Constructs a new S_BATTLE_LOGIC_FRAME.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IS_BATTLE_LOGIC_FRAME);

        /** S_BATTLE_LOGIC_FRAME cmd. */
        public cmd: number;

        /** S_BATTLE_LOGIC_FRAME scmd. */
        public scmd: number;

        /** S_BATTLE_LOGIC_FRAME dispatchInfos. */
        public dispatchInfos: BattlePto.IDispatchInfo[];

        /** S_BATTLE_LOGIC_FRAME leastStartFrame. */
        public leastStartFrame: number;

        /**
         * Encodes the specified S_BATTLE_LOGIC_FRAME message. Does not implicitly {@link BattlePto.S_BATTLE_LOGIC_FRAME.verify|verify} messages.
         * @param message S_BATTLE_LOGIC_FRAME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IS_BATTLE_LOGIC_FRAME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BATTLE_LOGIC_FRAME message, length delimited. Does not implicitly {@link BattlePto.S_BATTLE_LOGIC_FRAME.verify|verify} messages.
         * @param message S_BATTLE_LOGIC_FRAME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IS_BATTLE_LOGIC_FRAME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BATTLE_LOGIC_FRAME message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BATTLE_LOGIC_FRAME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.S_BATTLE_LOGIC_FRAME;

        /**
         * Decodes a S_BATTLE_LOGIC_FRAME message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BATTLE_LOGIC_FRAME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.S_BATTLE_LOGIC_FRAME;

        /**
         * Verifies a S_BATTLE_LOGIC_FRAME message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_BATTLE_LOGIC_FRAME message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_BATTLE_LOGIC_FRAME
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.S_BATTLE_LOGIC_FRAME;

        /**
         * Creates a plain object from a S_BATTLE_LOGIC_FRAME message. Also converts values to other types if specified.
         * @param message S_BATTLE_LOGIC_FRAME
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.S_BATTLE_LOGIC_FRAME, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BATTLE_LOGIC_FRAME to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_BATTLE_DISPATCH. */
    interface IC_BATTLE_DISPATCH {

        /** C_BATTLE_DISPATCH cmd */
        cmd?: (number|null);

        /** C_BATTLE_DISPATCH scmd */
        scmd?: (number|null);

        /** C_BATTLE_DISPATCH dispatchInfo */
        dispatchInfo?: (BattlePto.IDispatchInfo|null);
    }

    /** Represents a C_BATTLE_DISPATCH. */
    class C_BATTLE_DISPATCH implements IC_BATTLE_DISPATCH {

        /**
         * Constructs a new C_BATTLE_DISPATCH.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IC_BATTLE_DISPATCH);

        /** C_BATTLE_DISPATCH cmd. */
        public cmd: number;

        /** C_BATTLE_DISPATCH scmd. */
        public scmd: number;

        /** C_BATTLE_DISPATCH dispatchInfo. */
        public dispatchInfo?: (BattlePto.IDispatchInfo|null);

        /**
         * Encodes the specified C_BATTLE_DISPATCH message. Does not implicitly {@link BattlePto.C_BATTLE_DISPATCH.verify|verify} messages.
         * @param message C_BATTLE_DISPATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IC_BATTLE_DISPATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_BATTLE_DISPATCH message, length delimited. Does not implicitly {@link BattlePto.C_BATTLE_DISPATCH.verify|verify} messages.
         * @param message C_BATTLE_DISPATCH message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IC_BATTLE_DISPATCH, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_BATTLE_DISPATCH message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_BATTLE_DISPATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.C_BATTLE_DISPATCH;

        /**
         * Decodes a C_BATTLE_DISPATCH message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_BATTLE_DISPATCH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.C_BATTLE_DISPATCH;

        /**
         * Verifies a C_BATTLE_DISPATCH message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_BATTLE_DISPATCH message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_BATTLE_DISPATCH
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.C_BATTLE_DISPATCH;

        /**
         * Creates a plain object from a C_BATTLE_DISPATCH message. Also converts values to other types if specified.
         * @param message C_BATTLE_DISPATCH
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.C_BATTLE_DISPATCH, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_BATTLE_DISPATCH to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_BATTLE_END. */
    interface IC_BATTLE_END {

        /** C_BATTLE_END cmd */
        cmd?: (number|null);

        /** C_BATTLE_END scmd */
        scmd?: (number|null);

        /** C_BATTLE_END winUserId */
        winUserId?: (string|null);
    }

    /** Represents a C_BATTLE_END. */
    class C_BATTLE_END implements IC_BATTLE_END {

        /**
         * Constructs a new C_BATTLE_END.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IC_BATTLE_END);

        /** C_BATTLE_END cmd. */
        public cmd: number;

        /** C_BATTLE_END scmd. */
        public scmd: number;

        /** C_BATTLE_END winUserId. */
        public winUserId: string;

        /**
         * Encodes the specified C_BATTLE_END message. Does not implicitly {@link BattlePto.C_BATTLE_END.verify|verify} messages.
         * @param message C_BATTLE_END message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IC_BATTLE_END, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_BATTLE_END message, length delimited. Does not implicitly {@link BattlePto.C_BATTLE_END.verify|verify} messages.
         * @param message C_BATTLE_END message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IC_BATTLE_END, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_BATTLE_END message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_BATTLE_END
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.C_BATTLE_END;

        /**
         * Decodes a C_BATTLE_END message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_BATTLE_END
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.C_BATTLE_END;

        /**
         * Verifies a C_BATTLE_END message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_BATTLE_END message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_BATTLE_END
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.C_BATTLE_END;

        /**
         * Creates a plain object from a C_BATTLE_END message. Also converts values to other types if specified.
         * @param message C_BATTLE_END
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.C_BATTLE_END, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_BATTLE_END to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_BATTLE_END. */
    interface IS_BATTLE_END {

        /** S_BATTLE_END cmd */
        cmd?: (number|null);

        /** S_BATTLE_END scmd */
        scmd?: (number|null);

        /** S_BATTLE_END winUserId */
        winUserId?: (string|null);
    }

    /** Represents a S_BATTLE_END. */
    class S_BATTLE_END implements IS_BATTLE_END {

        /**
         * Constructs a new S_BATTLE_END.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IS_BATTLE_END);

        /** S_BATTLE_END cmd. */
        public cmd: number;

        /** S_BATTLE_END scmd. */
        public scmd: number;

        /** S_BATTLE_END winUserId. */
        public winUserId: string;

        /**
         * Encodes the specified S_BATTLE_END message. Does not implicitly {@link BattlePto.S_BATTLE_END.verify|verify} messages.
         * @param message S_BATTLE_END message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IS_BATTLE_END, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_BATTLE_END message, length delimited. Does not implicitly {@link BattlePto.S_BATTLE_END.verify|verify} messages.
         * @param message S_BATTLE_END message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IS_BATTLE_END, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_BATTLE_END message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_BATTLE_END
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.S_BATTLE_END;

        /**
         * Decodes a S_BATTLE_END message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_BATTLE_END
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.S_BATTLE_END;

        /**
         * Verifies a S_BATTLE_END message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_BATTLE_END message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_BATTLE_END
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.S_BATTLE_END;

        /**
         * Creates a plain object from a S_BATTLE_END message. Also converts values to other types if specified.
         * @param message S_BATTLE_END
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.S_BATTLE_END, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_BATTLE_END to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DispatchInfo. */
    interface IDispatchInfo {

        /** DispatchInfo fromId */
        fromId?: (number|null);

        /** DispatchInfo targetId */
        targetId?: (number|null);

        /** DispatchInfo dispatchRate */
        dispatchRate?: (number|null);
    }

    /** Represents a DispatchInfo. */
    class DispatchInfo implements IDispatchInfo {

        /**
         * Constructs a new DispatchInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: BattlePto.IDispatchInfo);

        /** DispatchInfo fromId. */
        public fromId: number;

        /** DispatchInfo targetId. */
        public targetId: number;

        /** DispatchInfo dispatchRate. */
        public dispatchRate: number;

        /**
         * Encodes the specified DispatchInfo message. Does not implicitly {@link BattlePto.DispatchInfo.verify|verify} messages.
         * @param message DispatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BattlePto.IDispatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DispatchInfo message, length delimited. Does not implicitly {@link BattlePto.DispatchInfo.verify|verify} messages.
         * @param message DispatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BattlePto.IDispatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DispatchInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DispatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattlePto.DispatchInfo;

        /**
         * Decodes a DispatchInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DispatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattlePto.DispatchInfo;

        /**
         * Verifies a DispatchInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DispatchInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DispatchInfo
         */
        public static fromObject(object: { [k: string]: any }): BattlePto.DispatchInfo;

        /**
         * Creates a plain object from a DispatchInfo message. Also converts values to other types if specified.
         * @param message DispatchInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattlePto.DispatchInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DispatchInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace StagePto. */
export namespace StagePto {

    /** Properties of a C_PASS_STAGE. */
    interface IC_PASS_STAGE {

        /** C_PASS_STAGE cmd */
        cmd?: (number|null);

        /** C_PASS_STAGE scmd */
        scmd?: (number|null);

        /** C_PASS_STAGE stageId */
        stageId?: (number|null);
    }

    /** Represents a C_PASS_STAGE. */
    class C_PASS_STAGE implements IC_PASS_STAGE {

        /**
         * Constructs a new C_PASS_STAGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: StagePto.IC_PASS_STAGE);

        /** C_PASS_STAGE cmd. */
        public cmd: number;

        /** C_PASS_STAGE scmd. */
        public scmd: number;

        /** C_PASS_STAGE stageId. */
        public stageId: number;

        /**
         * Encodes the specified C_PASS_STAGE message. Does not implicitly {@link StagePto.C_PASS_STAGE.verify|verify} messages.
         * @param message C_PASS_STAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: StagePto.IC_PASS_STAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_PASS_STAGE message, length delimited. Does not implicitly {@link StagePto.C_PASS_STAGE.verify|verify} messages.
         * @param message C_PASS_STAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: StagePto.IC_PASS_STAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_PASS_STAGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_PASS_STAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StagePto.C_PASS_STAGE;

        /**
         * Decodes a C_PASS_STAGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_PASS_STAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StagePto.C_PASS_STAGE;

        /**
         * Verifies a C_PASS_STAGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_PASS_STAGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_PASS_STAGE
         */
        public static fromObject(object: { [k: string]: any }): StagePto.C_PASS_STAGE;

        /**
         * Creates a plain object from a C_PASS_STAGE message. Also converts values to other types if specified.
         * @param message C_PASS_STAGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: StagePto.C_PASS_STAGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_PASS_STAGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_PASS_STAGE. */
    interface IS_PASS_STAGE {

        /** S_PASS_STAGE cmd */
        cmd?: (number|null);

        /** S_PASS_STAGE scmd */
        scmd?: (number|null);

        /** S_PASS_STAGE stageId */
        stageId?: (number|null);
    }

    /** Represents a S_PASS_STAGE. */
    class S_PASS_STAGE implements IS_PASS_STAGE {

        /**
         * Constructs a new S_PASS_STAGE.
         * @param [properties] Properties to set
         */
        constructor(properties?: StagePto.IS_PASS_STAGE);

        /** S_PASS_STAGE cmd. */
        public cmd: number;

        /** S_PASS_STAGE scmd. */
        public scmd: number;

        /** S_PASS_STAGE stageId. */
        public stageId: number;

        /**
         * Encodes the specified S_PASS_STAGE message. Does not implicitly {@link StagePto.S_PASS_STAGE.verify|verify} messages.
         * @param message S_PASS_STAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: StagePto.IS_PASS_STAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_PASS_STAGE message, length delimited. Does not implicitly {@link StagePto.S_PASS_STAGE.verify|verify} messages.
         * @param message S_PASS_STAGE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: StagePto.IS_PASS_STAGE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_PASS_STAGE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_PASS_STAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StagePto.S_PASS_STAGE;

        /**
         * Decodes a S_PASS_STAGE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_PASS_STAGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StagePto.S_PASS_STAGE;

        /**
         * Verifies a S_PASS_STAGE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_PASS_STAGE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_PASS_STAGE
         */
        public static fromObject(object: { [k: string]: any }): StagePto.S_PASS_STAGE;

        /**
         * Creates a plain object from a S_PASS_STAGE message. Also converts values to other types if specified.
         * @param message S_PASS_STAGE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: StagePto.S_PASS_STAGE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_PASS_STAGE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
