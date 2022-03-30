/**
 * 2034. Stock Price Fluctation
 */
import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';
import { PrintArray, PrintObject } from '../utils/Utilities';

class StockPriceRef {
  data:any;
  max:any;
  min:any;
  currentTimestamp:number;

  constructor() {
    this.data = new Map();
    this.max = new MaxPriorityQueue();
    this.min = new MinPriorityQueue();
    this.currentTimestamp = -1;
  }

  update(timestamp: number, price: number): void {
    this.currentTimestamp = Math.max(this.currentTimestamp, timestamp);

    this.data.set(timestamp, price);
    this.max.enqueue(timestamp, price);
    this.min.enqueue(timestamp, price);
  }

  current(): number {
    return this.data.get(this.currentTimestamp);
  }

  maximum(): number {
    let {priority: price, element: timestamp} = this.max.front();
    
    // We're basically dequeuing incorrect values from the heap!
    // That's literally all we're doing. We're checking for accuracy by
    // checking the previous price vs current price in the timestamp map.
    while (this.data.get(timestamp) !== price) {
      this.max.dequeue();

      price = this.max.front().priority;
      timestamp = this.max.front().element;
    }

    return price;
  }

  minimum(): number {
    let {priority: price, element: timestamp} = this.min.front();

    while (this.data.get(timestamp) !== price) {
      this.min.dequeue();

      price = this.min.front().priority;
      timestamp = this.min.front().element;
    }

    return price;
  }
}

class StockPrice {
  currTime:number;
  map:any;
  max:any;
  min:any;

  constructor() {
    this.currTime = -1;
    this.map = {};
    this.max = new MaxPriorityQueue();
    this.min = new MinPriorityQueue();
  }

  update(timestamp: number, price: number): void {
    this.currTime = Math.max(this.currTime, timestamp);
    this.map[timestamp] = price;
    this.max.enqueue(timestamp, price);
    this.min.enqueue(timestamp, price);
  }

  current(): number {
    return this.map[this.currTime];
  }

  maximum(): number {
    this.removeReplacedEntries(this.max);
    return this.max.front().priority;
  }

  minimum(): number {
    this.removeReplacedEntries(this.min);
    return this.min.front().priority;
  }

  removeReplacedEntries(heap:any) {
    let {priority:price, element:timestamp} = heap.front();

    while (this.map[timestamp] !== price) {
      heap.dequeue();
      price = heap.front().priority;
      timestamp = heap.front().element;
    }
  }
}

export default () => {
  const stockPrice = new StockPrice();
  stockPrice.update(1, 10); // Timestamps are [1] with corresponding prices [10].
  
  stockPrice.update(2, 5);  // Timestamps are [1,2] with corresponding prices [10,5].
  console.log(stockPrice.current());     // return 5, the latest timestamp is 2 with the price being 5.
  console.log(stockPrice.maximum());     // return 10, the maximum price is 10 at timestamp 1.
  stockPrice.update(1, 3);  // The previous timestamp 1 had the wrong price, so it is updated to 3.
                            // Timestamps are [1,2] with corresponding prices [3,5].
  console.log(stockPrice.maximum());     // return 5, the maximum price is 5 after the correction.
  stockPrice.update(4, 2);  // Timestamps are [1,2,4] with corresponding prices [3,5,2].
  console.log(stockPrice.minimum());     // return 2, the minimum price is 2 at timestamp 4.
};
