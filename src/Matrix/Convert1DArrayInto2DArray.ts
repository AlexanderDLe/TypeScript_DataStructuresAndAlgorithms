/**
 AlgoExpert
*/


import { PrintMatrix, PrintObject } from '../utils/Utilities';
import SearchA2DMatrix2 from './SearchA2DMatrix2';

const convert1DArrayInto2DArray = (original:number[], m:number, n:number): number[][] => {
  if (original.length !== m * n) return [];
  
  let result: number[][] = [];
  let row: number[] = [];
  for (let i = 0; i < original.length; i++) {
    let num = original[i];
    row.push(num);

    if (i % n === n - 1) {
      result.push([...row]);
      row = [];
    }
  }

  return result;
}

export default () => {
    // const board = [1,2,3,4,5,6,7,8,9]
    const board = [2]
    console.log(convert1DArrayInto2DArray(board, 1, 1));
    // PrintMatrix(board);
};
