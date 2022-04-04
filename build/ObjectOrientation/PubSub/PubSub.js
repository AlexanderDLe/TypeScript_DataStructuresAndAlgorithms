"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubscribableClass_1 = require("./SubscribableClass");
const DataClass_1 = require("./DataClass");
exports.default = () => {
    const sub = new SubscribableClass_1.Subscribable();
    const unsub = sub.subscribe(console.log);
    sub.publish('Hello');
    sub.publish('Whatever');
    unsub();
    sub.publish('Bye');
    const dc = new DataClass_1.DataClass(0);
    const dcUnsub = dc.subscribe((v) => console.log(`D: ${v}`));
    const dcUnsub2 = dc.subscribe((v) => console.log(`D: ${v * 2}`));
    dc.setValue(42);
    dcUnsub();
    dcUnsub2();
};
