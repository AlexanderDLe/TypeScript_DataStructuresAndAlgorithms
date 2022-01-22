/**
 * Grokking the Coding Interview
 * 
*/
let Heap = require('collections/heap');

class MedianOfAStream {
    minHeap: any;
    maxHeap: any;

    constructor() {
        this.minHeap = new Heap([], null, ((a:number, b:number) => b - a))
        this.maxHeap = new Heap([], null, ((a:number, b:number) => a - b))
    }

    insert_num(num:number) {
        let minLen = this.minHeap.length;
        let maxLen = this.maxHeap.length;
        
        // If both heaps are empty, push into minHeap
        if (!minLen && !maxLen) {
            this.minHeap.push(num);
            return;
        }

        // If one heap is empty, then balance
        if (!minLen || !maxLen) {
            let minHeapNum = this.minHeap.peek();
            if (num <= minHeapNum) this.maxHeap.push(num);
            else {
                minHeapNum = this.minHeap.pop();
                this.maxHeap.push(minHeapNum);
                this.minHeap.push(num);
            }
            return;
        }
        
        // Heaps are equal in length, then push num to most relevant
        if (minLen === maxLen) {
            let minHeapNum = this.minHeap.peek();
            if (num <= minHeapNum) this.maxHeap.push(num);
            else this.minHeap.push(num);
            return;
        }
        
        // Heaps are not equal in length, then take middle and compare with num b4 push
        if (minLen !== maxLen) {
            let middleNum = minLen > maxLen 
                           ? this.minHeap.pop()
                           : this.maxHeap.pop();

            if (num <= middleNum) {
                this.maxHeap.push(num);
                this.minHeap.push(middleNum);
            } else {
                this.maxHeap.push(middleNum);
                this.minHeap.push(num);
            }
            return;
        }
    }
  
    find_median() {
        let minLen = this.minHeap.length;
        let maxLen = this.maxHeap.length;

        let minHeapNum = this.minHeap.peek() || 0;
        let maxHeapNum = this.maxHeap.peek() || 0;

        if (minLen !== maxLen) {
            let middleNum = minLen > maxLen
                          ? this.minHeap.peek()
                          : this.maxHeap.peek();
            return middleNum;
        }
        
        return (minHeapNum + maxHeapNum) / 2;
    }

    print() {
        console.log('minHeap', this.minHeap)
        console.log('maxHeap', this.maxHeap)
    }
};
class MedianOfAStream2 {
    minHeap: any;
    maxHeap: any;

    constructor() {
        this.minHeap = new Heap([], null, ((a:number, b:number) => b - a))
        this.maxHeap = new Heap([], null, ((a:number, b:number) => a - b))
    }

    insert_num(num:number) {
        let maxLen = this.maxHeap.length;
        
        if (maxLen === 0 || this.maxHeap.peek() >= num) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }
        
        let minLen = this.minHeap.length;
        maxLen = this.maxHeap.length;

        // either both the heaps will have equal num of elements or 
        // maxHeap will have 1 more element than the min-heap
        if (maxLen === minLen + 2) {
            this.minHeap.push(this.maxHeap.pop())
        } else if (maxLen < minLen) {
            this.maxHeap.push(this.minHeap.pop())
        }
    }
  
    find_median() {
        let maxLen = this.maxHeap.length;
        let minLen = this.minHeap.length;

        if (maxLen === minLen) {
            return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
        }
        return this.maxHeap.peek();
    }

    print() {
        console.log('minHeap', this.minHeap)
        console.log('maxHeap', this.maxHeap)
    }
};

const heapTest = () => {
    let maxHeap = new Heap([], null, ((a:number, b:number) => a - b));
    maxHeap.push(1)
    maxHeap.push(2)
    maxHeap.push(3)
    console.log('maxHeap: ', maxHeap.peek())
    
    let minHeap = new Heap([], null, ((a:number, b:number) => b - a))
    minHeap.push(1)
    minHeap.push(2)
    minHeap.push(3)
    console.log('minHeap: ', minHeap.peek())

    console.log([5,3,6,1,3,9,8].sort((a, b) => a - b))
}

export default () => {
    // heapTest();

    var medianOfAStream = new MedianOfAStream2()
    medianOfAStream.insert_num(3)
    medianOfAStream.insert_num(1)
    console.log(`The median is: ${medianOfAStream.find_median()}`)
    medianOfAStream.insert_num(5)
    // medianOfAStream.print();
    console.log(`The median is: ${medianOfAStream.find_median()}`)
    medianOfAStream.insert_num(4)
    console.log(`The median is: ${medianOfAStream.find_median()}`)
};