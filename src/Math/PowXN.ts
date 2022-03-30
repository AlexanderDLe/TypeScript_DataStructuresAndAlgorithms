/**
 *  50. Pow(x, n)
 */

import { PrintArray } from '../utils/Utilities';

const myPowA = (x:number, n:number): number => {
  if (!n) return 1;

  let pow = Math.abs(n);

  let result = pow % 2 == 0 ? myPow(x*x, pow / 2) : myPow(x*x, (pow - 1)/2) * x;

  return n < 0 ? 1/result : result;
};

const myPowB = (x:number, n:number): number => {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === -1) return 1/x;
  if (n % 2 === 0) {
    let t = myPow(x, n / 2);
    return t * t;
  }
  if (n % 2 !== 0) {
    return x * myPow(x, n - 1);
  }
}

const myPow = (x:number, n:number): number => {
  if (n === 0) return 1;
  else if (n === 1) return x;
  else if (n === -1) return 1/x;
  else if (n % 2 === 0) {
    let t = myPow(x, n/2);
    return t * t;
  }
  else if (n % 2 !== 0) {
    return x * myPow(x, n - 1);
  }
}



export default () => {
  console.log(myPow(2, 10))
  console.log(myPow(2.1, 3))
  console.log(myPow(2, -2))
};
