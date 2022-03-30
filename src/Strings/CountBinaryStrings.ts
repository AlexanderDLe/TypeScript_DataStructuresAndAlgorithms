/**
 *  696. Count Binary String
 * 
 *  00110011
 *      ^
 * 
 * curr = 2
 * prev = 2
 * result = 0
 */

const countStrings = (s: string): number => {
  let result = 0;
  let prev = 0;
  let curr = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr++;
    } else {
      result += Math.min(prev, curr);
      prev = curr;
      curr = 1;
    }
  }
  // Mistake: Loop will end before retroactively accounting
  // for the last results.
  result += Math.min(prev, curr);

  return result;
}

export default () => {
  console.log(countStrings('00110011'));
  console.log(countStrings('10101'));
};
