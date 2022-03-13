/**
 * 451. Sort Characters By Frequency
*/

const frequencySort = (s:string): string => {
  let map: any = {}

  for (let char of s) map[char] = (map[char] || 0) + 1;
  let arr = Object.entries(map).sort((a:any, b:any) => b[1] - a[1]);
  
  let result = '';
  for (let [char, freq] of arr) {
    result += char.repeat(Number(freq));
  }
  return result;
};

export default () => {
  console.log(frequencySort("tree"))
  console.log(frequencySort("cccaaa"))
};
