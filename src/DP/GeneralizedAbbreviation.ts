/**
 * 320. Generalized Abbreviations  
 * 
 * word
 * 
 * ''
 * 
 * w | 1    <--- For each char, add both the char and a 1
 * 
 * wo | w1 | 11 -> 2 | 1o
 *            ^----------- If two numbers are adjacent, then combine them
 * 
 * wor | wo1 | w1r | w11 -> w2 | 2r | 21 -> 3 | 1or | 1o1
 *            
 */

const generateAbbreviations = (word: string): string[] => {
  if (!word.length) return [];

  const lastCharIsNum = (res:string) => {
    if (res.length === 0) return false;
    if (isNaN(Number(res[res.length - 1]))) return false;
    return true;
  }

  const mergeNums = (res:string) => {
    let num = Number(res[res.length - 1]) + 1;
    return res.substring(0, res.length - 1) + num;
  }

  let result: string[] = [''];
  for (let char of word) {
    let newResult: string[] = [];
  
    for (let res of result) {
      newResult.push(res + char);

      if (lastCharIsNum(res)) {
        newResult.push(mergeNums(res));
      } else {
        newResult.push(res + '1');
      }
    }
    result = newResult;
  }

  return result;
}

export default () => {
  let word = 'asdf';
  console.log(generateAbbreviations(word));
};
