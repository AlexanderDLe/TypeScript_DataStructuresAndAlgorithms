/**
 * 377. Combination Sum 4
 *  
 *  [1, 2, 3]         
 * 
 *  [1,1,1]
 *  [1, 2]
 *  [2, 1]
 *              
 *                                  4
 *                        1         2         3
 *                     1  2  3   1  2  3   1  2  3
 *                1 2 3 123 123
*/

import { PrintObject } from "../utils/Utilities";


const combinationSum4A = (nums:number[], target:number): number => {
  let DP = new Map();
  const recurse = (curr:number) => {
    if (DP.has(curr)) return DP.get(curr);
    if (curr === target) return 1;
    if (curr > target) return 0;

    let count = 0;
    for (let num of nums) {
      count += recurse(curr + num);
    }

    DP.set(curr, count);
    return count;
  }

  let res = recurse(0);
  console.log(DP);
  return res;
}

const combinationSum4ObjectDoesntWorkHere = (nums:number[], target:number): number => {
  let DP: any = {}
  const recurse = (curr:number) => {
    if (DP[curr]) return DP[curr];
    if (curr === target) return 1;
    if (curr > target) return 0;

    let count = 0;
    for (let num of nums) {
      count += recurse(curr + num);
    }

    DP[curr] = count;
    return count;
  }

  let res = recurse(0);
  console.log(DP);
  return res;
}

export default () => {
  const nums = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670,680,690,700,710,720,730,740,750,760,770,780,790,800,810,820,830,840,850,860,870,880,890,900,910,920,930,940,950,960,970,980,990,111]
  console.log(combinationSum4A(nums, 999));
  console.log(combinationSum4A([1,2,3], 4));
};