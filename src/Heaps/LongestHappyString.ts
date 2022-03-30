/**
 * 1405. Longest Happy String
 */

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";


const longestHappyString = (a:number,b:number,c:number): string => {
  const buildMaxHeap = () => {
    const maxHeap = new MaxPriorityQueue({priority: (item:any) => item.frequency});
    if (a) maxHeap.enqueue({char: 'a', frequency: a});
    if (b) maxHeap.enqueue({char: 'b', frequency: b});
    if (c) maxHeap.enqueue({char: 'c', frequency: c});
    return maxHeap;
  }
  
  const maxHeap = buildMaxHeap();
	const queue = [];
	let result = '';
	
	while (maxHeap.size()) {
		let {char, frequency} = maxHeap.dequeue().element;
		let queueFreq = queue[0]?.frequency || null;

		if (queueFreq && frequency < queueFreq) {
			result += char;
			frequency--;
    } else {
      result += frequency > 1 ? char + char : char;
      frequency -= frequency > 1 ? 2 : 1;
    }
		
		if (queue.length > 0) maxHeap.enqueue(queue.pop());
		if (frequency > 0) queue.push({char, frequency});	
		
	}
	return result;
}

export default () => {
  // console.log(longestHappyString(1, 1, 7));
  console.log(longestHappyString(7, 1, 0));
};
