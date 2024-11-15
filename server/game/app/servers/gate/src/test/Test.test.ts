import * as assert from 'assert';
import { GateServer } from '../GateServer';
describe('gate', () => {
    it("getRouterLogic", async function () {
        function getRand(max: number) {
            return Math.floor(Math.random() * max);
        }

        for (let i = 0; i < 100; i++) {
            const times = 1000;
            const timesMap = { 0: 0, 1: 0 };
            for (let index = 0; index < times; index++) {
                timesMap[GateServer.prototype.getIntHash(`::ffff:${getRand(1000)}.${getRand(1000)}.${getRand(1000)}.${getRand(1000)}`) % 2]++
            }
            assert.strictEqual(timesMap[0] / times > 0.40 && timesMap[0] / times < 0.60, true);
        }
    });
});