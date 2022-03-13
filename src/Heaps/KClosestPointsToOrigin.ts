/**
 * 973. K Closest Points To Origin
*/
import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

type Point = {
  distance: number,
  point: number[];
}
const kClosest = (points:number[][], k:number): number[][] => {
  const result: number[][] = [];
  const heap = new MaxPriorityQueue({priority: (x:Point) => x.distance});

  for (let point of points) {
    const [x, y] = point;
    const distance = Math.sqrt((x*x) + (y*y));

    if (heap.size() >= k) {
      let topDistance = heap.front().element.distance;
      if (distance < topDistance) {
        heap.dequeue();
        heap.enqueue({distance, point});
      }
    }
    if (heap.size() < k) heap.enqueue({distance, point})
  }

  while (heap.size()) result.push(heap.dequeue().element.point);
  return result;
};

export default () => {
  console.log(kClosest([[1,3],[-2,2]], 1))
  console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))
};
