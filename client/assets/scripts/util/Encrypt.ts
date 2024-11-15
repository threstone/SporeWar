import Algo from "./Algo";
export default class Encrypt {
    constructor() {
    }

    static utf8Encode(str: string): string {
        return unescape(encodeURIComponent(str));
    }

    static base64Encode(str: string): string {
        // @ts-ignore
        return new Buffer(str, 'utf8').toString('base64'); // Node.js
        // if (typeof btoa != 'undefined') return btoa(str); // browser
        // if (typeof Buffer != 'undefined')
        // throw new Error('No Base64 Encode');
    }

    //
    static base64Decode(str: string): string {
        // @ts-ignore
        return new Buffer(str, 'base64').toString('utf8');
        // if (typeof atob != 'undefined') return atob(str); // browser
        // if (typeof Buffer != 'undefined')  // Node.js
        // throw new Error('No Base64 Decode');
    }

    static utf8Decode(str: string) {
        try {
            return decodeURIComponent(escape(str));
        } catch (e) {
            return str; // invalid UTF-8? return as-is
        }
    }

    static encrypt(plaintext: string, password: string, nBits: number = 128): string {
        let blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4)
        if (!(nBits == 128 || nBits == 192 || nBits == 256)) return ''; // standard allows 128/192/256 bit keys
        plaintext = Encrypt.utf8Encode(String(plaintext));
        password = Encrypt.utf8Encode(String(password));
        // use AES itself to encrypt password to get cipher key (using plain password as source for key
        // expansion) - gives us well encrypted key (though hashed key might be preferred for prod'n use)
        let nBytes = nBits / 8;  // no bytes in key (16/24/32)
        let pwBytes = new Array(nBytes);
        for (let i = 0; i < nBytes; i++) {  // use 1st 16/24/32 chars of password for key
            pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
        }
        let key = Algo.cipher(pwBytes, Algo.keyExpansion(pwBytes)); // gives us 16-byte key
        key = key.concat(key.slice(0, nBytes - 16));  // expand key to 16/24/32 bytes long
        // initialise 1st 8 bytes of counter block with nonce (NIST SP800-38A �B.2): [0-1] = millisec,
        // [2-3] = random, [4-7] = seconds, together giving full sub-millisec uniqueness up to Feb 2106
        let counterBlock = new Array(blockSize);
        let nonce = (new Date()).getTime();  // timestamp: milliseconds since 1-Jan-1970
        let nonceMs = nonce % 1000;
        let nonceSec = Math.floor(nonce / 1000);
        let nonceRnd = Math.floor(Math.random() * 0xffff);
        // for debugging: nonce = nonceMs = nonceSec = nonceRnd = 0;
        for (let i = 0; i < 2; i++) counterBlock[i] = (nonceMs >>> i * 8) & 0xff;
        for (let i = 0; i < 2; i++) counterBlock[i + 2] = (nonceRnd >>> i * 8) & 0xff;
        for (let i = 0; i < 4; i++) counterBlock[i + 4] = (nonceSec >>> i * 8) & 0xff;
        // and convert it to a string to go on the front of the ciphertext
        let ctrTxt = '';
        for (let i = 0; i < 8; i++) ctrTxt += String.fromCharCode(counterBlock[i]);
        // generate key schedule - an expansion of the key into distinct Key Rounds for each round
        let keySchedule = Algo.keyExpansion(key);
        let blockCount = Math.ceil(plaintext.length / blockSize);
        let ciphertxt = new Array(blockCount);  // ciphertext as array of strings
        for (let b = 0; b < blockCount; b++) {
            // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
            // done in two stages for 32-bit ops: using two words allows us to go past 2^32 blocks (68GB)
            for (let c = 0; c < 4; c++) counterBlock[15 - c] = (b >>> c * 8) & 0xff;
            for (let c = 0; c < 4; c++) counterBlock[15 - c - 4] = (b / 0x100000000 >>> c * 8);
            let cipherCntr = Algo.cipher(counterBlock, keySchedule);  // -- encrypt counter block --
            // block size is reduced on final block
            let blockLength = b < blockCount - 1 ? blockSize : (plaintext.length - 1) % blockSize + 1;
            let cipherChar = new Array(blockLength);
            for (let i = 0; i < blockLength; i++) {  // -- xor plaintext with ciphered counter char-by-char --
                cipherChar[i] = cipherCntr[i] ^ plaintext.charCodeAt(b * blockSize + i);
                cipherChar[i] = String.fromCharCode(cipherChar[i]);
            }
            ciphertxt[b] = cipherChar.join('');
        }
        // use Array.join() for better performance than repeated string appends
        let ciphertext = ctrTxt + ciphertxt.join('');
        ciphertext = Encrypt.base64Encode(ciphertext);
        return ciphertext;
    }

    static decrypt(ciphertext: any, password: string, nBits: number = 128): string {
        let blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
        if (!(nBits == 128 || nBits == 192 || nBits == 256)) return ''; // standard allows 128/192/256 bit keys
        ciphertext = Encrypt.base64Decode(String(ciphertext));
        password = Encrypt.utf8Encode(password);
        // use AES to encrypt password (mirroring encrypt routine)
        let nBytes = nBits / 8;  // no bytes in key
        let pwBytes = new Array(nBytes);
        for (let i = 0; i < nBytes; i++) {
            pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
        }
        let key = Algo.cipher(pwBytes, Algo.keyExpansion(pwBytes));
        key = key.concat(key.slice(0, nBytes - 16));  // expand key to 16/24/32 bytes long
        // recover nonce from 1st 8 bytes of ciphertext
        let counterBlock = new Array(8);
        let ctrTxt = ciphertext.slice(0, 8);
        for (let i = 0; i < 8; i++) counterBlock[i] = ctrTxt.charCodeAt(i);
        // generate key schedule
        let keySchedule = Algo.keyExpansion(key);
        // separate ciphertext into blocks (skipping past initial 8 bytes)
        let nBlocks = Math.ceil((ciphertext.length - 8) / blockSize);
        let ct = new Array(nBlocks);
        for (let b = 0; b < nBlocks; b++) ct[b] = ciphertext.slice(8 + b * blockSize, 8 + b * blockSize + blockSize);
        ciphertext = ct;  // ciphertext is now array of block-length strings
        // plaintext will get generated block-by-block into array of block-length strings
        let plaintxt = new Array(ciphertext.length);
        for (let b = 0; b < nBlocks; b++) {
            // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
            for (let c = 0; c < 4; c++) counterBlock[15 - c] = ((b) >>> c * 8) & 0xff;
            for (let c = 0; c < 4; c++) counterBlock[15 - c - 4] = (((b + 1) / 0x100000000 - 1) >>> c * 8) & 0xff;
            let cipherCntr = Algo.cipher(counterBlock, keySchedule);  // encrypt counter block
            let plaintxtByte = new Array(ciphertext[b].length);
            for (let i = 0; i < ciphertext[b].length; i++) {
                // -- xor plaintxt with ciphered counter byte-by-byte --
                plaintxtByte[i] = cipherCntr[i] ^ ciphertext[b].charCodeAt(i);
                plaintxtByte[i] = String.fromCharCode(plaintxtByte[i]);
            }
            plaintxt[b] = plaintxtByte.join('');
        }
        // join array of blocks into single plaintext string
        let plaintext = plaintxt.join('');
        plaintext = Encrypt.utf8Decode(plaintext);  // decode from UTF8 back to Unicode multi-byte chars
        return plaintext;
    }
}