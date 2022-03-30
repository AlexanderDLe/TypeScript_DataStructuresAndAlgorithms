/**
 * 784. Letter Case Permutation 
 */

import { PrintMatrix } from "../utils/Utilities";

const letterCasePermutation = (str: string): string[] => {
  let result: string[] = ['']

  for (let char of str) {
    let newResult: string[] = [];

    if (!isNaN(Number(char))) {
      for (let i = 0; i < result.length; i++) {
        result[i] += char;
      }
      continue;
    }

    let lowerCase = char.toLowerCase();
    let upperCase = char.toUpperCase();
    for (let substr of result) {
      newResult.push(substr + lowerCase);
      newResult.push(substr + upperCase);
    }

    result = [...newResult];
  }

  return result;
}



export default () => {
    const str1 = "a1b2";
    console.log(letterCasePermutation(str1));
};
