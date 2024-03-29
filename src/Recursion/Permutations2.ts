/**
 * 47. Permutations 2
 * 
 * [1, 1, 2, 2]
 * 
 * {1: 2, 2: 2}
 * 
 * []
 * 
 * [1]  [2]
 * 
 * [11][12] [21][22]
 * 
 * [112][121] [211][221]
 * 
 */
import { PrintMatrix } from '../utils/Utilities';

const permuteRef = (nums: number[]): number[][] => {
  let map: any = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  
  let len = nums.length;
  let result: number[][] = []

  const recurse = (i:number, res:number[]) => {
    if (i === len) {
      result = [...result, res];
      return;
    }

    for (let key in map) {
      if (!map[key]) continue;
      map[key]--;
      recurse(i + 1, [...res, Number(key)]);
      map[key]++;
    }
  }

  recurse(0, []);
  return result;
}

const permute = (nums: number[]): number[][] => {
  const result:number[][] = []
  const map:any = {};
  for (let num of nums) map[num] = (map[num] || 0) + 1;

  const backtrack = (obj:any, subarr: number[]) => {
    if (subarr.length === nums.length) {
      result.push([...subarr]);
      return;
    }

    for (let key in obj) {
      let val = obj[key];
      if (!val) continue;

      obj[key]--;
      subarr.push(Number(key));
      backtrack(obj, subarr);
      obj[key]++;
      subarr.pop();
    }
  }

  backtrack(map, [])
  return result;
}

export default () => {
    let nums = [1, 1, 2];
    PrintMatrix(permute(nums));
};
