"use strict";
/**
 * 155. Min Stack
 */
Object.defineProperty(exports, "__esModule", { value: true });
class MinStackOld {
    constructor() {
        this.data = [];
        this.mins = [];
    }
    push(x) {
        this.data.push(x);
        if (x <= this.getMin() || !this.mins.length) {
            this.mins.push(x);
        }
    }
    pop() {
        if (this.getMin() === this.top()) {
            this.mins.pop();
        }
        this.data.pop();
    }
    top() {
        if (this.data.length) {
            return this.data[this.data.length - 1];
        }
    }
    getMin() {
        if (this.mins.length) {
            return this.mins[this.mins.length - 1];
        }
    }
}
class MinStack {
    constructor() {
        this.data = [];
        this.mins = [];
    }
    push(x) {
        this.data.push(x);
        if (!this.mins.length || x <= this.getMin())
            this.mins.push(x);
    }
    pop() {
        if (this.top() === this.getMin())
            this.mins.pop();
        this.data.pop();
    }
    top() {
        return this.data[this.data.length - 1];
    }
    getMin() {
        return this.mins[this.mins.length - 1] || 0;
    }
}
exports.default = () => {
    let obj = new MinStack();
    obj.push(0);
    obj.push(1);
    obj.push(0);
    console.log(obj.getMin());
    obj.pop();
    console.log(obj.top());
    console.log(obj.getMin());
};
