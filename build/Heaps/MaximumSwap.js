"use strict";
/**
 *  670. Maximum Swap
 *
 *
 * 2 7 3 6
 * ^
 *
 * Heap:
 *      7, 1
 *      6, 3
 *      3, 2
 *      2, 0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
const maxSwapCanHandleNegativesButSlightlyWrong = (num) => {
    const getString = (negative) => {
        let str = num.toString();
        if (negative)
            str = str.substring(1);
        return str;
    };
    const buildHeap = (str, negative) => {
        let heap;
        if (negative)
            heap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x.value });
        else
            heap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x.value });
        for (let i = 0; i < str.length; i++) {
            let num = str[i];
            heap.enqueue({ value: Number(num), index: i });
        }
        return heap;
    };
    const negative = num < 0;
    const str = getString(negative);
    const heap = buildHeap(str, negative);
    let arr = str.split('');
    let swapped = false;
    for (let i = 0; i < str.length; i++) {
        let curr = Number(str[i]);
        while (heap.size()) {
            let { value, index } = heap.front().element;
            if (index <= i) {
                heap.dequeue();
                continue;
            }
            if (negative && value < curr) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
                swapped = true;
            }
            else if (!negative && value > curr) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
                swapped = true;
            }
            else {
                heap.dequeue();
            }
            break;
        }
    }
    if (negative)
        arr.unshift('-');
    return swapped ? Number(arr.join('')) : num;
};
class CustomPriorityQueue extends priority_queue_1.PriorityQueue {
}
const maxSwapLeetcodeDoesntAcceptPriorityQueue = (num) => {
    const buildHeap = (arr) => {
        let heap = new CustomPriorityQueue({ compare: (parent, child) => {
                if (parent.value === child.value) {
                    if (child.index > parent.index)
                        return 1;
                    else
                        return -1;
                }
                return child.value > parent.value ? 1 : -1;
            } });
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            heap.enqueue({ value: Number(num), index: i });
        }
        return heap;
    };
    const arr = num.toString().split('');
    const heap = buildHeap(arr);
    for (let i = 0; i < arr.length; i++) {
        let curr = Number(arr[i]);
        while (heap.size()) {
            let { value, index } = heap.front();
            console.log(curr, value, index);
            if (index <= i) {
                heap.dequeue();
                continue;
            }
            if (value > curr) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
                return Number(arr.join(''));
            }
            else {
                // Mistake: if value is not greater, then just break and go to next
                break;
            }
        }
    }
    return num;
};
const maxSwap = (num) => {
    const numArr = [...num.toString()].map(Number);
    const maxIndex = [];
    const len = numArr.length;
    let maxSoFar = len - 1;
    // Iterate from end.
    for (let i = len - 1; i >= 0; i--) {
        // Get the largest number at the latest index.
        if (numArr[i] > numArr[maxSoFar])
            maxSoFar = i;
        // Each index should know the index of its current maxSoFar
        maxIndex[i] = maxSoFar;
    }
    for (let i = 0; i < len; i++) {
        const swapIndex = maxIndex[i];
        // From each index, swap if the swapIndex is neither the same index/value
        if (i !== swapIndex && numArr[i] < numArr[swapIndex]) {
            [numArr[i], numArr[swapIndex]] = [numArr[swapIndex], numArr[i]];
            break;
        }
    }
    return +numArr.join('');
};
exports.default = () => {
    // console.log(maxSwap(19939))
    // console.log(maxSwap(98368))
    // console.log(maxSwap(2736))
    console.log(maxSwap(546423));
    // console.log(maxSwap(9973))
    // console.log(maxSwap(0))
};
