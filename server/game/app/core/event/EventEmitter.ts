import { Listener } from './Listener';

export class EventEmitter {
    private static __ins__: EventEmitter;

    static ins() {
        if (!EventEmitter.__ins__) {
            EventEmitter.__ins__ = new EventEmitter();
        }
        return EventEmitter.__ins__;
    }

    private _events: {};

    constructor() {
        // 构造方法
        this._events = {};
    }

    __createListener(fn: Function, caller: any) {
        return new Listener(fn, caller);
    }

    __equalsListener(listener1: any, listener2: any) {
        return listener1.fn === listener2.fn && listener1.caller === listener2.caller;
    }

    /**
     * Adds a listener
     * @api public
     */
    on(name: string | number, fn: Function, caller: any = null) {
        const listener = this.__createListener(fn, caller);
        if (!this._events[name]) {
            this._events[name] = listener;
        } else if (Array.isArray(this._events[name])) {
            this._events[name].push(listener);
        } else {
            this._events[name] = [this._events[name], listener];
        }
        return this;
    }

    /**
     * Adds a volatile listener.
     * @api public
     */

    once(name: string | number, fn: Function, caller: any = null) {
        const self = this;
        const listener = this.__createListener(fn, caller);

        function on(...args: any[]) {
            self.removeListener(name, on);
            fn.call(listener.caller, ...args);
        }
        on.listener = listener;
        this.on(name, on);
        return this;
    }

    /**
     * Removes a listener.
     * @api public
     */
    removeListener(name: string | number, fn: Function, caller: any = null) {
        const listener = this.__createListener(fn, caller);
        if (this._events && this._events[name]) {
            const list = this._events[name];
            if (Array.isArray(list)) {
                let pos = -1;
                for (let i = 0, l = list.length; i < l; i++) {
                    const o = list[i];
                    if (this.__equalsListener(o, listener) || (o.listener && this.__equalsListener(o.listener, listener))) {
                        pos = i;
                        break;
                    }
                }
                if (pos < 0) {
                    return this;
                }
                list.splice(pos, 1);
                if (!list.length) {
                    delete this._events[name];
                }
            } else if (this.__equalsListener(list, listener) || (list.listener && this.__equalsListener(list.listener, listener))) {
                delete this._events[name];
            }
        }
        return this;
    }

    off(name: string | number, fn: Function, caller: any = null) {
        return this.removeListener(name, fn, caller);
    }

    /**
     * Gets all listeners for a certain event.
     *
     * @api publci
     */
    listeners(name: string | number) {
        if (!this._events[name]) {
            this._events[name] = [];
        }
        if (!Array.isArray(this._events[name])) {
            this._events[name] = [this._events[name]];
        }
        return this._events[name];
    }

    /**
     * Emits an event.
     *
     * tip: use arg1...arg5 instead of arguments for performance consider.
     *
     * @api public
     */

    emit(name: string | number, ...args: any[]) {
        const handler = this._events[name];
        if (!handler) {
            return this;
        }
        if (typeof handler === 'object' && !Array.isArray(handler)) {
            handler.fn.call(handler.caller || this, ...args);
        } else if (Array.isArray(handler)) {
            const listeners = new Array(handler.length);
            for (let i = 0; i < handler.length; i++) {
                listeners[i] = handler[i];
            }
            for (let i = 0, l = listeners.length; i < l; i++) {
                const h = listeners[i];
                if (h.fn.call(h.caller || this, ...args) === false) break;
            }
        }
        return this;
    }

    removeAllListeners() {
        this._events = {};
    }
}
