"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribable = void 0;
class Subscribable {
    constructor() {
        this.subscribers = new Set();
    }
    subscribe(cb) {
        this.subscribers.add(cb);
        return () => {
            this.subscribers.delete(cb);
        };
    }
    publish(msg) {
        this.subscribers.forEach((cb) => cb(msg));
    }
}
exports.Subscribable = Subscribable;
