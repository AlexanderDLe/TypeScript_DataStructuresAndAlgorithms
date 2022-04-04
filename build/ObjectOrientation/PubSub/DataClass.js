"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataClass = void 0;
const SubscribableClass_1 = require("./SubscribableClass");
class DataClass extends SubscribableClass_1.Subscribable {
    constructor(value) {
        super();
        this.value = value;
    }
    setValue(v) {
        this.value = v;
        this.publish(v);
    }
}
exports.DataClass = DataClass;
