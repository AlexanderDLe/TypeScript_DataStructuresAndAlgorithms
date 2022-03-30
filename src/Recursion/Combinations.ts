/**
 * 77. Combinations
 *  
 * Find all possible combinations of size k within the range.
 * 
 * n = 5 and k = 3
 * 
 * 1, 2, 3, 4, 5
 * 
 * start 1 -> find every combination
 * 
 * start 2 -> find every combination except 1
 * 
 * start 3 -> find every combintnion except 1, 2
 * 
 * 
 *                                     [ ]
 *                                      .
 *                              [1]     [2]      [3]    
 *                               .      .           .      
 *            [12]     [13]     [14]  [23][24]       [34]
 *              .        .        .           .        .      
 *  [123][124][125] [134][135]  [145]   [234]         [345]    <--- len === k, now push
 *                     .         .         .      
 *                  
 */
import { PrintMatrix } from '../utils/Utilities';

const combinationsA = (n:number, k:number): number[][] => {
  let result: number[][] = []
  
  const recurse = (num:number, subarr:number[]) => {
    if (subarr.length === k) {
      result.push([...subarr]);
      return;
    }

    for (let i = num + 1; i <= n; i++) {
      subarr.push(i);
      recurse(i, subarr);
      subarr.pop();
    }
  }
  
  recurse(0, []);

  return result;
}

const combinationsB = (n:number, k:number): number[][] => {
  const result: number[][] = [];

  const recurse = (num:number, subarr:number[]) => {
    if (subarr.length === k) {
      result.push([...subarr]);
      return;
    }
    if (num > n) return;

    for (let i = num + 1; i <= n; i++) {
      subarr.push(i);
      recurse(i, subarr);
      subarr.pop();
    }
  }
  recurse(0, []);
  return result;
}

const combinationsC = (n:number, k:number): number[][] => {
  let result: number[][] = [];
  
  const recurse = (index:number, subarr:number[]) => {
    if (subarr.length === k) result.push([...subarr]);
    if (subarr.length >= k || index > n) return;

    for (let i = index; i < n; i++) {
      subarr.push(i + 1);
      recurse(i + 1, subarr);
      subarr.pop();
    }
  }
  recurse(0, []);
  return result;
} 
/*

  n = 4, k = 2

                      1
                  .   .   .
               12     13     14 
            .  .      .
        123   124    134

        
            v
        1,2,3,4  k = 2
*/
const combinations = (n:number, k:number): number[][] => {
  const result:number[][] = []

  const backtrack = (num:number, subarr:number[]) => {
    if (subarr.length === k) {
      result.push([...subarr]);
      return;
    }

    for (let i = num; i <= n; i++) {
      subarr.push(i);
      backtrack(i + 1, subarr);
      subarr.pop();
    }
  }

  backtrack(1, []);
  return result;
}

export default () => {
  PrintMatrix(combinations(4, 2));
};
