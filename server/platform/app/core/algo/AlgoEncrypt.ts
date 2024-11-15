/* eslint-disable no-bitwise */

import { Algo } from './Algo';

export class AlgoEncrypt {
    static utf8Encode(str) {
        return unescape(encodeURIComponent(str));
    }

    static base64Encode(str: string) {
        return Buffer.from(str, 'utf8').toString('base64');// Node.js
        // if (typeof btoa != 'undefined') return btoa(str); // browser
        // if (typeof Buffer != 'undefined')
        // throw new Error('No Base64 Encode');
    }

    static base64Decode(str: string) {
        return Buffer.from(str, 'base64').toString('utf8');
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

    static encrypt(plaintext: string, password: string, nBits: number) {
        const blockSize = 16; // block size fixed at 16 bytes / 128 bits (Nb=4)
        if (!(nBits === 128 || nBits === 192 || nBits === 256)) return ''; // standard allows 128/192/256 bit keys
        plaintext = AlgoEncrypt.utf8Encode(String(plaintext));
        password = AlgoEncrypt.utf8Encode(String(password));
        // use AES itself to encrypt password to get cipher key (using plain password as source for key
        // expansion) - gives us well encrypted key (though hashed key might be preferred for prod'n use)
        const nBytes = nBits / 8; // no bytes in key (16/24/32)
        const pwBytes = new Array(nBytes);
        for (let i = 0; i < nBytes; i++) { // use 1st 16/24/32 chars of password for key
            pwBytes[i] = Number.isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
        }
        let key = Algo.cipher(pwBytes, Algo.keyExpansion(pwBytes)); // gives us 16-byte key
        key = key.concat(key.slice(0, nBytes - 16)); // expand key to 16/24/32 bytes long
        // initialise 1st 8 bytes of counter block with nonce (NIST SP800-38A �B.2): [0-1] = millisec,
        // [2-3] = random, [4-7] = seconds, together giving full sub-millisec uniqueness up to Feb 2106
        const counterBlock = new Array(blockSize);
        const nonce = (new Date()).getTime(); // timestamp: milliseconds since 1-Jan-1970
        const nonceMs = nonce % 1000;
        const nonceSec = Math.floor(nonce / 1000);
        const nonceRnd = Math.floor(Math.random() * 0xffff);
        // for debugging: nonce = nonceMs = nonceSec = nonceRnd = 0;
        for (let i = 0; i < 2; i++) counterBlock[i] = (nonceMs >>> i * 8) & 0xff;
        for (let i = 0; i < 2; i++) counterBlock[i + 2] = (nonceRnd >>> i * 8) & 0xff;
        for (let i = 0; i < 4; i++) counterBlock[i + 4] = (nonceSec >>> i * 8) & 0xff;
        // and convert it to a string to go on the front of the ciphertext
        let ctrTxt = '';
        for (let i = 0; i < 8; i++) ctrTxt += String.fromCharCode(counterBlock[i]);
        // generate key schedule - an expansion of the key into distinct Key Rounds for each round
        const keySchedule = Algo.keyExpansion(key);
        const blockCount = Math.ceil(plaintext.length / blockSize);
        const ciphertxt = new Array(blockCount); // ciphertext as array of strings
        for (let b = 0; b < blockCount; b++) {
            // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
            // done in two stages for 32-bit ops: using two words allows us to go past 2^32 blocks (68GB)
            for (let c = 0; c < 4; c++) counterBlock[15 - c] = (b >>> c * 8) & 0xff;
            for (let c = 0; c < 4; c++) counterBlock[15 - c - 4] = (b / 0x100000000 >>> c * 8);
            const cipherCntr = Algo.cipher(counterBlock, keySchedule); // -- encrypt counter block --
            // block size is reduced on final block
            // eslint-disable-next-line no-mixed-operators
            const blockLength = b < blockCount - 1 ? blockSize : (plaintext.length - 1) % blockSize + 1;
            const cipherChar = new Array(blockLength);
            for (let i = 0; i < blockLength; i++) { // -- xor plaintext with ciphered counter char-by-char --
                cipherChar[i] = cipherCntr[i] ^ plaintext.charCodeAt(b * blockSize + i);
                cipherChar[i] = String.fromCharCode(cipherChar[i]);
            }
            ciphertxt[b] = cipherChar.join('');
        }
        // use Array.join() for better performance than repeated string appends
        let ciphertext = ctrTxt + ciphertxt.join('');
        ciphertext = AlgoEncrypt.base64Encode(ciphertext);
        return ciphertext;
    }

    static decrypt(ciphertext: string, password: string, nBits: number) {
        const blockSize = 16; // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
        if (!(nBits === 128 || nBits === 192 || nBits === 256)) return ''; // standard allows 128/192/256 bit keys
        ciphertext = AlgoEncrypt.base64Decode(String(ciphertext));
        password = AlgoEncrypt.utf8Encode(password);
        // use AES to encrypt password (mirroring encrypt routine)
        const nBytes = nBits / 8; // no bytes in key
        const pwBytes = new Array(nBytes);
        for (let i = 0; i < nBytes; i++) {
            pwBytes[i] = Number.isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
        }
        let key = Algo.cipher(pwBytes, Algo.keyExpansion(pwBytes));
        key = key.concat(key.slice(0, nBytes - 16)); // expand key to 16/24/32 bytes long
        // recover nonce from 1st 8 bytes of ciphertext
        const counterBlock = new Array(8);
        const ctrTxt = ciphertext.slice(0, 8);
        for (let i = 0; i < 8; i++) counterBlock[i] = ctrTxt.charCodeAt(i);
        // generate key schedule
        const keySchedule = Algo.keyExpansion(key);
        // separate ciphertext into blocks (skipping past initial 8 bytes)
        const nBlocks = Math.ceil((ciphertext.length - 8) / blockSize);
        const ct = new Array(nBlocks);
        for (let b = 0; b < nBlocks; b++) ct[b] = ciphertext.slice(8 + b * blockSize, 8 + b * blockSize + blockSize);
        const tempArray = ct; // ciphertext is now array of block-length strings
        // plaintext will get generated block-by-block into array of block-length strings
        const plaintxt = new Array(tempArray.length);
        for (let b = 0; b < nBlocks; b++) {
            // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
            for (let c = 0; c < 4; c++) counterBlock[15 - c] = ((b) >>> c * 8) & 0xff;
            for (let c = 0; c < 4; c++) counterBlock[15 - c - 4] = (((b + 1) / 0x100000000 - 1) >>> c * 8) & 0xff;
            const cipherCntr = Algo.cipher(counterBlock, keySchedule); // encrypt counter block
            const plaintxtByte = new Array(tempArray[b].length);
            for (let i = 0; i < tempArray[b].length; i++) {
                // -- xor plaintxt with ciphered counter byte-by-byte --
                plaintxtByte[i] = cipherCntr[i] ^ tempArray[b].charCodeAt(i);
                plaintxtByte[i] = String.fromCharCode(plaintxtByte[i]);
            }
            plaintxt[b] = plaintxtByte.join('');
        }
        // join array of blocks into single plaintext string
        let plaintext = plaintxt.join('');
        plaintext = AlgoEncrypt.utf8Decode(plaintext); // decode from UTF8 back to Unicode multi-byte chars
        return plaintext;
    }
}
