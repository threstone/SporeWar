import * as assert from 'assert';
import { EventEmitter } from '../../event/EventEmitter';

describe('EventEmitter.test', () => {
    it("EventEmitter test", async function () {
        let triggerCount = 0;
        const eventName = 'name'
        EventEmitter.ins().once(eventName, (time: number) => {
            triggerCount += time;
        });
        EventEmitter.ins().on(eventName, (time: number) => {
            triggerCount += time;
        });

        EventEmitter.ins().emit(eventName, 2);
        EventEmitter.ins().emit(eventName, 2);
        assert.strictEqual(triggerCount, 6);
    });
});
