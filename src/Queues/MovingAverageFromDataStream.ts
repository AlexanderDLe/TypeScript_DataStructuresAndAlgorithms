/**
 * 346. Moving Average from Data Stream
*/
import { MaxPriorityQueue } from "@datastructures-js/priority-queue";


class MovingAverage {
  size:number;
  queue:number[];
  sum:number;

  constructor(size: number) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }

  next(val: number): number {
    if (this.queue.length === this.size) {
      this.sum -= this.queue.shift();
    }
    this.queue.push(val);
    this.sum += val;
    return this.sum / this.queue.length;
  }
}


export default () => {
  const movingAverage = new MovingAverage(3);
  console.log(movingAverage.next(1)) // return 1.0 = 1 / 1
  console.log(movingAverage.next(10)); // return 5.5 = (1 + 10) / 2
  console.log(movingAverage.next(3)) // return 4.66667 = (1 + 10 + 3) / 3
  console.log(movingAverage.next(5)) // return 6.0 = (10 + 3 + 5) / 3
};
