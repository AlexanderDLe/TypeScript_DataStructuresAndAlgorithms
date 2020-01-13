/**
 * 155. Min Stack
 */

class MinStack {
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

export default () => {
    let obj = new MinStack();
    obj.push(-2);
    obj.push(0);
    obj.push(-3);
    console.log(obj.getMin());
    obj.pop();
    console.log(obj.top());
    console.log(obj.getMin());
};
