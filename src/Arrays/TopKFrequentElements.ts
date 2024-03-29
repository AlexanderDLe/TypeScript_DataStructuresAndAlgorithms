/**
 * 347. Top K Frequent Elements
 */

import { PrintArray, PrintObject } from '../utils/Utilities';

type Table = {
    [key: number]: number;
};
type Tuple = [number, number];
const topKFrequentA = (nums: number[], k: number): number[] => {
    let result: number[] = [];
    let map: Table = {};
    let pq: Tuple[] = [];

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    for (let key in map) {
        pq.push([parseInt(key), map[key]]);
    }
    
    pq = pq.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        result.push(pq[i][0]);
    }

    return result;
}

const topKFrequent = (nums: number[], k: number): number[] => {
    let result: number[] = [];
    let map: {[key: string]: number} = {};

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    let entries = Object.entries(map);
    let entriesCopy = [...entries];

    let sortedByDescendingValues: any = entriesCopy.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        result.push(sortedByDescendingValues[i][0])
    }

    return result;
}

const topKFrequentWithObject = (nums: number[], k: number): number[] => {
    let table: Table = {};
    let result = [];

    for (let i of nums) table[i] = (table[i] || 0) + 1;
    let keysSorted = Object.keys(table).sort(
        (a: any, b: any) => table[b] - table[a]
    );

    for (let i = 0; i < k; i++) {
        result.push(parseInt(keysSorted[i]));
    }

    return result;
};

const topKFrequentWithMap = (nums: number[], k: number): number[] => {
    let result = [];
    let map = new Map();

    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        result.push(sortedArray[i][0]);
    }

    return result;
};

export default () => {
    const nums = [1,1,1,2,2,3];
    // PrintArray(topKFrequentWithObject(nums, 2));
    // PrintArray(topKFrequentWithMap(nums, 2));
    PrintArray(topKFrequent(nums, 2));
};
