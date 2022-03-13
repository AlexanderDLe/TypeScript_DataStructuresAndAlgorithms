"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 621. Task Scheduler
 */
const priority_queue_1 = require("@datastructures-js/priority-queue");
// Nested Task Tracking Objects - Slowest
const leastIntervalNested = (tasks, n) => {
    let taskTracker = {};
    let schedule = [];
    let numTasks = tasks.length;
    for (let task of tasks) {
        if (taskTracker[task])
            taskTracker[task].tasks += 1;
        else
            taskTracker[task] = {
                tasks: 1,
                index: -Infinity
            };
    }
    let i = 0;
    const findValidTask = (i) => {
        const sorted = Object.keys(taskTracker).sort((a, b) => taskTracker[b].tasks - taskTracker[a].tasks);
        for (let t of sorted) {
            if (i - taskTracker[t].index > n) {
                taskTracker[t].index = i;
                if (taskTracker[t].tasks === 1)
                    delete taskTracker[t];
                else
                    taskTracker[t].tasks--;
                numTasks--;
                return t;
            }
        }
        return '';
    };
    while (numTasks) {
        schedule.push(findValidTask(i));
        i++;
    }
    return schedule.length;
};
const leastIntervalArrays = (tasks, n) => {
    if (!n)
        return tasks.length;
    let total = tasks.length;
    let result = 0;
    let available = [];
    let unavailable = new Array(n + 1).fill(0);
    // Initialize table
    let map = {};
    for (let task of tasks)
        map[task] = (map[task] || 0) + 1;
    for (let item in map)
        available.push([item, map[item]]);
    while (total) {
        let rejoin = unavailable.shift();
        if (rejoin)
            available.push(rejoin);
        available.sort((a, b) => a[1] - b[1]);
        let picked = available.pop();
        if (picked) {
            picked[1]--;
            total--;
            if (picked[1])
                unavailable.push(picked);
            else
                unavailable.push(0);
        }
        else
            unavailable.push(0);
        result++;
    }
    return result;
};
/*
  The key is to find out how many idles do we need.
  Let's first look at how to arrange them. it's not hard to figure out that we can do a "greedy arrangement": always arrange task with most frequency first.
  E.g. we have following tasks : 3 A, 2 B, 1 C. and we have n = 2. According to what we have above, we should first arrange A, and then B and C. Imagine there are "slots" and we need to arrange tasks by putting them into "slots". Then A should be put into slot 0, 3, 6 since we need to have at least n = 2 other tasks between two A. After A put into slots, it looks like this:

  A ? ? A ? ? A
  "?" is "empty" slots.

  Now we can use the same way to arrange B and C. The finished schedule should look like this:

  A B C A B # A
  "#" is idle

  Now we have a way to arrange tasks. But the problem only asks for number of CPU intervals, so we don't need actually arrange them. Instead we only need to get the total idles we need and the answer to problem is just number of idles + number of tasks.
  Same example: 3 A, 2 B, 1 C, n = 2. After arranging A, we have:
  A ? ? A ? ? A
  We can see that A separated slots into (count(A) - 1) = 2 parts, each part has length n. With the fact that A is the task with most frequency, it should need more idles than any other tasks. In this case if we can get how many idles we need to arrange A, we will also get number of idles needed to arrange all tasks. Calculating this is not hard, we first get number of parts separated by A: partCount = count(A) - 1; then we can know number of empty slots: emptySlots = partCount * n; we can also get how many tasks we have to put into those slots: availableTasks = tasks.length - count(A). Now if we have emptySlots > availableTasks which means we have not enough tasks available to fill all empty slots, we must fill them with idles. Thus we have idles = max(0, emptySlots - availableTasks);
  Almost done. One special case: what if there are more than one task with most frequency? OK, let's look at another example: 3 A 3 B 2 C 1 D, n = 3
  Similarly we arrange A first:
  A ? ? ? A ? ? ? A
  Now it's time to arrange B, we find that we have to arrange B like this:
  A B ? ? A B ? ? A B
  we need to put every B right after each A. Let's look at this in another way, think of sequence "A B" as a special task "X", then we got:
  X ? ? X ? ? X
  Comparing to what we have after arranging A:
  A ? ? ? A ? ? ? A
  The only changes are length of each parts (from 3 to 2) and available tasks. By this we can get more general equations:
  partCount = count(A) - 1
  emptySlots = partCount * (n - (count of tasks with most frequency - 1))
  availableTasks = tasks.length - count(A) * count of tasks with most frenquency
  idles = max(0, emptySlots - availableTasks)
  result = tasks.length + idles

  What if we have more than n tasks with most frequency and we got emptySlot negative? Like 3A, 3B, 3C, 3D, 3E, n = 2. In this case seems like we can't put all B C S inside slots since we only have n = 2.
  Well partCount is actually the "minimum" length of each part required for arranging A. You can always make the length of part longer.
  E.g. 3A, 3B, 3C, 3D, 2E, n = 2.
  You can always first arrange A, B, C, D as:
  A B C D | A B C D | A B C D
  in this case you have already met the "minimum" length requirement for each part (n = 2), you can always put more tasks in each part if you like:
  e.g.
  A B C D E | A B C D E | A B C D

  emptySlots < 0 means you have already got enough tasks to fill in each part to make arranged tasks valid. But as I said you can always put more tasks in each part once you met the "minimum" requirement.

  To get count(A) and count of tasks with most frequency, we need to go through inputs and calculate counts for each distinct char. This is O(n) time and O(26) space since we only handle upper case letters.
  All other operations are O(1) time O(1) space which give us total time complexity of O(n) and space O(1)

*/
const leastIntervalMathematical = (tasks, n) => {
    if (!n)
        return tasks.length;
    let total = tasks.length;
    let maxCount = 0;
    let max = 0;
    let map = {};
    for (let task of tasks) {
        map[task] = (map[task] || 0) + 1;
        if (map[task] > max) {
            max = map[task];
            maxCount = 1;
        }
        else if (map[task] === max)
            maxCount++;
    }
    console.log(max);
    console.log(maxCount);
    let parts = max - 1;
    let maxes = max * maxCount;
    let spaces = parts * (n - maxCount + 1);
    let remaining = total - maxes;
    let idles = Math.max(0, spaces - remaining);
    return total + idles;
};
/*

  ['A', 'D', 'D', 'B', 'B', 'B', 'A', 'A', 'A', 'C', 'C']

  {
    A: 4,
    B: 3,
    C: 2,
    D: 2
  }

  Use max heap to track tasks with most instances left.


  Insert all items onto max heap and prioritize by instances left.
  Keep track of an index counter to determine if items is valid.

  Search for next item:
  If there is an item on the heap, that is the next item - otherwise there is no valid item yet.

  Heap --- Item ---> Queue

  A queue of length (tasks) is used to cycle items into the heap by queue.length time.

  Increment index whether you find valid item or not.
*/
const taskSchedulerA = (tasks, n) => {
    const buildHeap = () => {
        const heap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x });
        const map = {};
        for (let task of tasks) {
            map[task] = (map[task] || 0) + 1;
        }
        for (let key in map) {
            heap.enqueue(map[key]);
        }
        return heap;
    };
    let heap = buildHeap();
    let tasksIncompleted = heap.size();
    let queue = new Array(n).fill(null);
    let index = 0;
    while (tasksIncompleted > 0) {
        // If a valid item exists, update and push back into heap if still instances left
        if (heap.size()) {
            let item = heap.dequeue().element;
            item--;
            if (item > 0) {
                queue.push(item);
            }
            else {
                tasksIncompleted--;
                queue.push(null);
            }
        }
        else {
            queue.push(null);
        }
        let qItem = queue.shift();
        if (qItem !== null)
            heap.enqueue(qItem);
        console.log(queue);
        index++;
    }
    return index;
};
const taskScheduler = (tasks, n) => {
    const buildHeap = () => {
        let heap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x });
        let map = {};
        for (let task of tasks)
            map[task] = (map[task] || 0) + 1;
        for (let key in map) {
            heap.enqueue(map[key]);
        }
        return heap;
    };
    const heap = buildHeap();
    const queue = new Array(n).fill(null);
    let tasksLeft = heap.size();
    let index = 0;
    while (tasksLeft) {
        if (heap.size()) {
            let item = heap.dequeue().element;
            item--;
            if (item) {
                queue.push(item);
            }
            else {
                queue.push(null);
                tasksLeft--;
            }
        }
        else {
            queue.push(null);
        }
        let qItem = queue.shift();
        if (qItem)
            heap.enqueue(qItem);
        index++;
    }
    return index;
};
exports.default = () => {
    const tasks1 = ["A", "A", "A", "B", "B", "B"];
    const tasks2 = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"];
    const n = 2;
    console.log(taskScheduler(tasks1, n));
    console.log(taskScheduler(tasks2, n));
};
