/**
 *  1014. Best Sightseeing Pair
 */

const maxScore = (values: number[]): number => {
  let result = 0;
  let curr = 0;

  for (let num of values) {
    result = Math.max(result, curr + num);
    curr = Math.max(curr, num) - 1;
  }

  return result;
};

export default () => {
  console.log(maxScore([8,1,5,2,6]));
  // console.log(maxScore([1,2]));
};
