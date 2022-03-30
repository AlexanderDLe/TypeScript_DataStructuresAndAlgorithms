/**
 *  1762. Buildings with an Ocean View
 */

const findBuildings = (heights: number[]): number[] => {
  let result:number[] = [];
  let max = 0;
  
  for (let i = heights.length - 1; i >= 0; i--) {
    let height = heights[i];
    if (height > max) {
      result.unshift(i);
      max = height;
    }
  }

  return result;
};

export default () => {
  console.log(findBuildings([4,2,3,1]));
  console.log(findBuildings([4,3,2,1]));
  console.log(findBuildings([1,3,2,4]));
};
