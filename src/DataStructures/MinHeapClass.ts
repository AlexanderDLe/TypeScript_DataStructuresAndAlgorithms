export class MinHeap {
    max: number;
    list: number[];

    constructor(max: number) {
        this.max = max;
        this.list = [];
    }
    add(val: number) {
        if (this.list.length >= this.max) {
            if (val > this.list[0]) {
                this.remove();
                this.list.push(val);
                this.bubbleUp();
            }
        } else {
            this.list.push(val);
            this.bubbleUp();
        }
        console.log(this.list);
    }
    remove() {
        if (this.list.length == 1) {
            this.list.pop();
            return;
        }
        let last = this.list.pop();
        this.list[0] = last;
        this.bubbleDown();
    }
    peak() {
        if (this.list.length > 0) {
            return this.list[0];
        }
    }
    bubbleUp() {
        let index = this.list.length - 1;
        let parent = Math.floor((index - 1) / 2);
        while (parent >= 0 && this.list[parent] > this.list[index]) {
            let temp = this.list[parent];
            this.list[parent] = this.list[index];
            this.list[index] = temp;
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    bubbleDown() {
        let curr = 0;
        let left, right;
        while (true) {
            left = 2 * curr + 1;
            right = 2 * curr + 2;
            if (left > this.list.length - 1) {
                break;
            }
            if (
                Math.min(
                    this.list[left],
                    this.list[right] || Number.MAX_SAFE_INTEGER
                ) > this.list[curr]
            ) {
                break;
            }
            let temp;
            if (
                this.list[right] !== undefined &&
                this.list[right] < this.list[left]
            ) {
                temp = this.list[right];
                this.list[right] = this.list[curr];
                this.list[curr] = temp;
                curr = right;
            } else {
                temp = this.list[left];
                this.list[left] = this.list[curr];
                this.list[curr] = temp;
                curr = left;
            }
        }
    }
}
