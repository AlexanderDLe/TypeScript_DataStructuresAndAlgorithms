/**
 * Grokking the Coding Interview
 * 
*/
let Heap = require('collections/heap');

class SlidingWindowMedian {
    minHeap: any;
    maxHeap: any;

    constructor() {
        this.minHeap = new Heap([], null, ((a:number, b:number) => b - a))
        this.maxHeap = new Heap([], null, ((a:number, b:number) => a - b))
    }

    find_sliding_window_median(nums:number[], k:number) {
        
    }

    find_median() {
        
    }

    print() {
        console.log('minHeap', this.minHeap)
        console.log('maxHeap', this.maxHeap)
    }
};

export default () => {
    var slidingWindowMedian = new SlidingWindowMedian()
    console.log(slidingWindowMedian.)
};