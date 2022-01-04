/**
 *  295. Find Median from Data Stream
 */

import { PrintArray } from '../utils/Utilities';

class MedianFinder {
    data: number[] = [];

    addNum(num: number): void {
        this.data.push(num);
        this.data.sort((a, b) => a - b);
    }

    findMedian(): number {
        let len = this.data.length;
        let lenIsOdd = len % 2 === 1;

        if (lenIsOdd) {
            let midpoint = Math.floor(len / 2);
            return this.data[midpoint];            
        } else {
            let midpoint1 = Math.floor(len / 2);
            let midpoint2 = midpoint1 - 1;

            let val1 = this.data[midpoint1];
            let val2 = this.data[midpoint2];

            return (val1 + val2)/2;
        }
    }
}

export default () => {
    let medianFinder = new MedianFinder();
    
    medianFinder.addNum(1);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(2);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(3);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(4);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(5);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(6);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(7);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(8);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(9);
    console.log(medianFinder.findMedian());
    medianFinder.addNum(10);
    console.log(medianFinder.findMedian());
};
