/**
 * 621. Task Scheduler
 */
import { PrintObject } from '../utils/Utilities';

type Map = {
    [key: string]: number;
};

// Inefficient Solution But Works
const leastInterval = (tasks: string[], n: number): number => {
    if (!n) return tasks.length;
    let total = tasks.length;
    let result = 0;
    let available: any = [];
    let unavailable = new Array(n + 1).fill(0);

    // Initialize table
    let map: Map = {};
    for (let task of tasks) map[task] = (map[task] || 0) + 1;
    for (let item in map) available.push([item, map[item]]);

    while (total) {
        let rejoin = unavailable.shift();
        if (rejoin) available.push(rejoin);

        available.sort((a: any, b: any) => a[1] - b[1]);

        let picked = available.pop();
        if (picked) {
            picked[1]--;
            total--;
            if (picked[1]) unavailable.push(picked);
            else unavailable.push(0);
        } else unavailable.push(0);

        result++;
    }
    return result;
};

const leastIntervalB = (tasks: string[], n: number): number => {
    if (!n) return tasks.length;

    let total = tasks.length;
    let maxCount = 0;
    let max = 0;
    let map: Map = {};
    for (let task of tasks) {
        map[task] = (map[task] || 0) + 1;

        if (map[task] > max) {
            max = map[task];
            maxCount = 1;
        } else if (map[task] === max) maxCount++;
    }

    let parts = max - 1;
    let maxes = max * maxCount;
    let spaces = parts * (n - maxCount + 1);
    let remaining = total - maxes;
    let idles = Math.max(0, spaces - remaining);
    return total + idles;
};

export default () => {
    const tasks = ['B', 'B', 'B', 'A', 'A', 'A', 'C', 'C'];
    const n = 2;

    console.log(leastIntervalB(tasks, n));
};
