"use strict";
/**
 * 155. Min Stack
 */
Object.defineProperty(exports, "__esModule", { value: true });
class MinStackA {
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
class MinStackB {
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
class MinStack {
    constructor() {
        this.data = [];
        this.min = [];
    }
    push(val) {
        this.data.push(val);
        if (!this.min.length || this.getMin() >= val) {
            this.min.push(val);
        }
    }
    pop() {
        let popped = this.data.pop();
        let minTop = this.getMin();
        if (popped === minTop) {
            this.min.pop();
        }
    }
    top() {
        return this.data[this.data.length - 1];
    }
    getMin() {
        return this.min[this.min.length - 1];
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
