/* 

*/

import { PrintArray } from '../utils/Utilities';

const algoSwap = (arr: number[]): number => {
  let numSwaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) numSwaps++;
    }
  }
  PrintArray(arr);
  return numSwaps;
}


export default () => {   
  console.log(algoSwap([5,1,4,2]));
};
