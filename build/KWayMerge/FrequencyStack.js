"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
let Deque = require('collections/deque');
class FrequencyStackMaintainSLOW {
    constructor() {
        this.maxHeap = new Heap([], null, this.maxHeapPattern);
        this.iterator = 0;
    }
    push(num) {
        let curr = this.maxHeap.pop() || null;
        let tempStore = [];
        while (curr && curr.num !== num) {
            if (curr)
                tempStore.push(curr);
            curr = this.maxHeap.pop();
        }
        while (tempStore.length > 0)
            this.maxHeap.push(tempStore.pop());
        curr = curr ? curr : { num, frequency: 0 };
        curr.frequency++;
        curr.iterator = this.iterator;
        this.iterator++;
        this.maxHeap.push(curr);
    }
    pop() {
        let curr = this.maxHeap.pop();
        let equalFrequencies = [];
        let highestIterator = curr.iterator;
        while (this.maxHeap.length > 0 && curr.frequency === this.maxHeap.peek().frequency) {
            equalFrequencies.push(curr);
            curr = this.maxHeap.pop();
            highestIterator = Math.max(highestIterator, curr.iterator);
        }
        equalFrequencies.push(curr);
        let chosenNum = null;
        for (let item of equalFrequencies) {
            if (item.iterator === highestIterator) {
                item.frequency--;
                chosenNum = item.num;
            }
            this.maxHeap.push(item);
        }
        return chosenNum;
    }
    maxHeapPattern(a, b) {
        return a.frequency - b.frequency;
    }
    print() {
        while (this.maxHeap.content.length > 0)
            console.log(this.maxHeap.pop());
        return '';
    }
}
;
class FrequencyStack {
    constructor() {
        this.maxHeap = new Heap([], null, this.maxHeapPattern);
        this.numMap = {};
        this.iterator = 0;
    }
    push(num) {
        let curr = this.numMap[num] || null;
        curr = curr ? { num, frequency: curr }
            : { num, frequency: 0 };
        curr.frequency++;
        this.iterator++;
        curr.iterator = this.iterator;
        this.numMap[num] = curr.frequency;
        this.maxHeap.push(curr);
    }
    pop() {
        let curr = this.maxHeap.pop();
        if (!curr)
            return -1;
        this.numMap[curr.num]--;
        return curr.num;
    }
    maxHeapPattern(a, b) {
        if (a.frequency !== b.frequency) {
            return a.frequency - b.frequency;
        }
        return a.iterator - b.iterator;
    }
    print() {
        while (this.maxHeap.content.length > 0)
            console.log(this.maxHeap.pop());
        return '';
    }
}
;
exports.default = () => {
    let frequencyStack = new FrequencyStack();
    frequencyStack.push(1);
    frequencyStack.push(2);
    frequencyStack.push(3);
    frequencyStack.push(2);
    frequencyStack.push(1);
    frequencyStack.push(2);
    frequencyStack.push(5);
    console.log(frequencyStack.pop());
    console.log(frequencyStack.pop());
    console.log(frequencyStack.pop());
    console.log(frequencyStack.print());
};
