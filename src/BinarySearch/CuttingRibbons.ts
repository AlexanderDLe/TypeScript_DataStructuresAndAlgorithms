/**
 1891. Cutting Ribbons
  
*/

import { PrintArray } from "../utils/Utilities";
    
const cutRibbonsRef = (ribbons:number[], k:number): number => {
  const isValidDiv = (val:number) => {
    let res = 0
    for (let i = 0; i < ribbons.length; i++) {
        res += Math.floor(ribbons[i]/val)
    }
    if (res >= k) return true
    return false
  }

  const sum = ribbons.reduce((acc, curr) => acc + curr);
  const maxVal = Math.floor(sum / k);
  if (maxVal === 0) return 0;

  let left = 0;
  let right = maxVal;

  while (left < right) {
    const pV = Math.floor((left + right + 1) / 2);
    if (isValidDiv(pV)) {
      left = pV;
    } else {
      right = pV - 1;
    }
  }

  return left
}

const cutRibbonsA = (ribbons:number[], k:number): number => {
  const isValid = (length: number) => {
    let res = 0;
    for (let ribbon of ribbons) {
      res += Math.floor(ribbon / length);
    }
    return res >= k;
  }

  let totalSum = ribbons.reduce((acc, curr) => acc + curr);
  let maxLength = Math.floor(totalSum / k);
  if (maxLength === 0) return 0;

  let left = 0;
  let right = maxLength;

  console.log('totalSum: ', totalSum);
  console.log('maxLength: ', maxLength);
  while (left < right) {
    // Why do we add 1 to this?
    // We add 1 here because since we are flooring, we
    // may enter an infinite loop Floor(6+7 / 2 = 6) VALID, therefore left = 6 again
    // and if a length is value, we want to try the next higher value.
    let length = Math.floor((left + right + 1) / 2);
    console.log('------------------')
    console.log('length: ', length);

    // We set left to length because want the precision since
    // we are returning left.
    if (isValid(length)) left = length;
    else right = length - 1;
    console.log(`left: ${left} | right: ${right}`)
  }

  return left;
}

const cutRibbons = (ribbons:number[], k:number): number => {
  const validLength = (length:number) => {
    let res = 0;
    for (let ribbon of ribbons) {
      res += Math.floor((ribbon) / length);
    }
    return res >= k;
  }

  const totalSum = ribbons.reduce((acc, curr) => acc + curr);
  const maxLength = Math.floor(totalSum/k);
  if (maxLength === 0) return 0;

  let L = 0;
  let R = maxLength;

  while (L < R) {
    let len = Math.floor((L + R + 1)/2);

    if (validLength(len)) L = len;
    else R = len - 1;
  }

  return L;
}

export default () => {
  console.log(cutRibbons([9,7,7,6], 4));
  // console.log(cutRibbons([7,5,9], 4));
};
