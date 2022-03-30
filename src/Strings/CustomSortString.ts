/**
 *  791. Custom Sort String
 */

const customSort = (order:string, s:string): string => {
  let map:any = {};

  for (let char of s) map[char] = (map[char] || 0) + 1;

  let result = '';
  for (let char of order) {
    if (char in map) {
      result += char.repeat(map[char]);
      delete map[char];
    }
  }

  for (let leftoverChar in map) {
    result += leftoverChar.repeat(map[leftoverChar]);
  }

  return result;
}

export default () => {
  console.log(customSort("cba", "abcd"));
  console.log(customSort("cbafg", "abcd"));
};
