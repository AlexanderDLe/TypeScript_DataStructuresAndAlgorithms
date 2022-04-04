/**
 *  1492. The Kth Factor of N
 */

import { PrintArray } from "../utils/Utilities";

const kthFactorSlow = (n:number, k:number): number => {
  const factors:number[] = []
  
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  PrintArray(factors);
  return factors[k - 1] ? factors[k - 1] : -1;
};

const kthFactor = (n:number, k:number): number => {
  const root = Math.sqrt(n);
  console.log(root);
  for (let i = 1; i < root; i++) {
    console.log(k);
    if (n % i === 0 && --k === 0) return i;
  }
  for (let i = root; i > 0; i--) {
    if (n % i === 0 && --k === 0) return n/i;
  }

  return -1;
};

export default () => {
  console.log(kthFactor(12, 3));
};
