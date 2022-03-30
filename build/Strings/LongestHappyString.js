"use strict";
/**
 * 1405. Longest Happy String
 */
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
const longestHappyString = (a, b, c) => {
    var _a;
    const buildMaxHeap = () => {
        const maxHeap = new priority_queue_1.MaxPriorityQueue({ priority: (item) => item.frequency });
        if (a)
            maxHeap.enqueue({ char: 'a', frequency: a });
        if (b)
            maxHeap.enqueue({ char: 'b', frequency: b });
        if (c)
            maxHeap.enqueue({ char: 'c', frequency: c });
        return maxHeap;
    };
    const maxHeap = buildMaxHeap();
    const queue = [];
    let result = '';
    while (maxHeap.size()) {
        let { char, frequency } = maxHeap.dequeue().element;
        let queueFreq = ((_a = queue[0]) === null || _a === void 0 ? void 0 : _a.frequency) || null;
        if (queueFreq && frequency < queueFreq) {
            result += char;
            frequency--;
        }
        else {
            result += frequency > 1 ? char + char : char;
            frequency -= frequency > 1 ? 2 : 1;
        }
        if (queue.length > 0)
            maxHeap.enqueue(queue.pop());
        if (frequency > 0)
            queue.push({ char, frequency });
    }
    return result;
};
exports.default = () => {
    // console.log(longestHappyString(1, 1, 7));
    console.log(longestHappyString(7, 1, 0));
};
