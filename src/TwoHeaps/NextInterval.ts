/**
 * Grokking the Coding Interview
 * 
 * We can utilize the Two Heaps approach. We 
 * can push all intervals into two heaps: one 
 * heap to sort the intervals on maximum start 
 * time (let’s call it maxStartHeap) and the 
 * other on maximum end time (let’s call it 
 * maxEndHeap). We can then iterate through 
 * all intervals of the maxEndHeap to find 
 * their next interval.
 * 
 * 
 * [[2,3], [3,4], [5,6]]
 * 
 ********************************************************************** 
 * 
 * maxStart         maxEnd
 * [5, 6]           [5, 6]
 * [3, 4]           [3, 4]
 * [2, 3]           [2, 3]
 * 
 * maxEndTop = [5,6]
 * maxStartTop = [5,6]
 * 
 * We need to determine if end of maxEndTop has a next interval.
 * 
 * Since these belong to the same index, however, then we must 
 * ignore and pop maxEnd.
 * 
 ************************************************************************ 
 * 
 * maxStart         maxEnd
 * [5, 6]           
 * [3, 4]           [3, 4]
 * [2, 3]           [2, 3]
 * 
 * maxEndTop = [3, 4]
 * maxStartTop = [5,6]
 * 
 * maxStartTop's start is greater than maxEndTop's end. Therefore we can
 * determine that maxStartTop's interval can be a potential next interval.
 * 
 * However, it is possible that there is another interval with a smaller start
 * value that is also greater than or equal to maxEndTop's end. To check, we
 * can pop out maxStart and check against the next one.
 * 
 ************************************************************************ 
 * 
 * maxStart         maxEnd
 * [3, 4]           [3, 4]
 * [2, 3]           [2, 3]
 * 
 * maxEndTop = [3, 4]
 * maxStartTop = [3, 4]
 * 
 * Since these belong to the same interval, then we can ignore and pop maxEnd
 * 
 ************************************************************************ 
 * 
 * maxStart         maxEnd
 * [3, 4]           
 * [2, 3]           [2, 3]
 * 
 * maxEndTop = [2, 3]
 * maxStartTop = [3, 4]
 * 
 * Since these belong to the same interval, then we can ignore and pop maxEnd
 * 
 ************************************************************************ 
 * 
 * etc.
*/
let Heap = require('collections/heap');

class Interval {
    index: number;
    start: number;
    end: number;

    constructor(index:number, interval:number[]) {
        this.index = index;
        this.start = interval[0];
        this.end = interval[1];
    }
}

const nextInterval = (intervals:number[][]): number[] => {
    const maxStartSort = (a:Interval,b:Interval) => {return a.start - b.start}
    const maxEndSort = (a:Interval,b:Interval) => {return a.end - b.end}
    
    const maxStart = new Heap([], null, maxStartSort);
    const maxEnd = new Heap([], null, maxEndSort);
    
    let result: number[] = new Array(intervals.length).fill(-1);

    for (let i = 0; i < intervals.length; i++) {
        let interval = new Interval(i, intervals[i]);
        maxStart.push(interval);
        maxEnd.push(interval);
    }

    while (maxEnd.length) {
        let maxEndTop = maxEnd.pop();

        while (maxStart.length) {
            let maxStartTop = maxStart.peek();
            
            if (maxStartTop.start >= maxEndTop.end) {
                maxStart.pop();
                let currIndex = maxEndTop.index;
                result[currIndex] = maxStartTop.index;
            } else {
                break;
            }
        }
    }

    return result;
}

const nextIntervalQuadratic = (intervals:number[][]): number[] => {
    const minStartFirstPattern = (a:Interval, b:Interval) => {
        return b.start - a.start;
    }

    let result: number[] = new Array(intervals.length).fill(-1);
    
    for (let i = 0; i < intervals.length; i++) {
        let currI = intervals[i];
        
        let minHeap = new Heap([], null, minStartFirstPattern)
        for (let j = 0; j < intervals.length; j++) {
            let currJ = intervals[j]
            if (i === j) continue;
            if (currI[1] <= currJ[0]) minHeap.push(new Interval(j, currJ))
        }

        if (minHeap.length) {
            let topIndex = minHeap.pop().index;
            result[i] = topIndex;
        }
    }

    return result;
}

export default () => {
    let intervals1 = [[2,3], [3,4], [5,6]];
    let intervals2 = [[3,4], [1,5], [4,6]];

    console.log(nextInterval(intervals1));
    console.log(nextInterval(intervals2));
};