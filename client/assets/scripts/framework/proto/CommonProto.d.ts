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
