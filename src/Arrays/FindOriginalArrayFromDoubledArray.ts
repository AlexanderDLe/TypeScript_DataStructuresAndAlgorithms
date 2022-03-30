/**
 *  2007. Find Original Array From Doubled Array
 */

const findArrayA = (changed: number[]): number[] => {
  if (changed.length % 2 === 1) return [];
  changed.sort((a, b) => a - b);
  const n = changed.length;
  const result:number[] = [];
  const map = new Map();

  for (let num of changed) {
    const half = num / 2;
    if (map.has(half) && map.get(half) > 0) {
      result.push(half);
      map.set(half, map.get(half) - 1);
    } else {
      map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    }
  }
  if (result.length !== n/2) return [];
  return result;
};

const findArray = (changed: number[]): number[] => {
  if (changed.length % 2 === 1) return [];
  changed.sort((a, b) => a - b);

  const n = changed.length;
  const map: any = {};
  const result:number[] = []

  for (let num of changed) {
    let half = num / 2;

    if (!(half in map)) {
      map[num] = 1;
      continue;
    }

    result.push(half);
    map[half]--;
    if (map[half] === 0) delete map[half];
  }

  if (result.length !== n/2) return [];
  return result;
}

export default () => {
  console.log(findArray([1,3,4,2,6,8]));
  // console.log(maxScore([1,2]));
};
