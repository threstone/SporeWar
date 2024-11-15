import { ProtoBufGenerator } from "./protobuf/ProtoBufGenerator";
import { NormalBufferGenerator } from "./normal/NormalBufferGenerator";
import * as configs from '../config';

async function main() {
    let protoBufGenerator = new ProtoBufGenerator();
    await protoBufGenerator.startGen(configs);

    let normalBufferGenerator = new NormalBufferGenerator();
    // normalBufferGenerator.startGen(configs);
}

main(); 