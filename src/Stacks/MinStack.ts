/**
 * 155. Min Stack
 */

class MinStackA {
    data: number[] = [];
    mins: number[] = [];

    push(x: number): void {
        this.data.push(x);
        if (x <= this.getMin() || !this.mins.length) {
            this.mins.push(x);
        }
    }
    pop(): void {
        if (this.getMin() === this.top()) {
            this.mins.pop();
        }
        this.data.pop();
    }
    top(): number {
        if (this.data.length) {
            return this.data[this.data.length - 1];
        }
    }
    getMin(): number {
        if (this.mins.length) {
            return this.mins[this.mins.length - 1];
        }
    }
}

class MinStackB {
    data: number[] = [];
    mins: number[] = [];

    push(x: number): void {
        this.data.push(x);
        if (!this.mins.length || x <= this.getMin()) this.mins.push(x);
    }

    pop(): void {
        if (this.top() === this.getMin()) this.mins.pop();
        this.data.pop();
    }

    top(): number {
        return this.data[this.data.length - 1];
    }

    getMin(): number {
        return this.mins[this.mins.length - 1] || 0;
    }
}

class MinStack {
    data: number[] = [];
    min: number[] = [];

    push(val: number): void {
        this.data.push(val);

        if (!this.min.length || this.getMin() >= val) {
            this.min.push(val);
        }
    }

    pop(): void {
        let popped = this.data.pop();
        let minTop = this.getMin();

        if (popped === minTop) {
            this.min.pop();
        }
    }

    top(): number {
        return this.data[this.data.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }
}

export default () => {
    let obj = new MinStack();
    obj.push(0);
    obj.push(1);
    obj.push(0);
    console.log(obj.getMin());
    obj.pop();
    console.log(obj.top());
    console.log(obj.getMin());
};
