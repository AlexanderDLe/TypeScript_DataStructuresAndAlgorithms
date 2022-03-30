/**
  1937. Maximum Number of Points with Cost
*/

const maxPoints = (P: number[][]): number => {
  const m = P.length;
  const n = P[0].length;
  let prev = new Array(n);

  for (let i = 0; i < n; i++) prev[i] = P[0][i];
  
  for (let i = 1; i < m; i++) {
    const left = new Array(n);
    const right = new Array(n);
    const curr = new Array(n);

    left[0] = prev[0];
    right[n - 1] = prev[n - 1];

    for (let j = 1; j < n; j++) {
      left[j] = Math.max(prev[j], left[j - 1] - 1);
    }
    for (let j = n - 2; j >= 0; j--) {
      right[j] = Math.max(prev[j], right[j + 1] - 1);
    }
    for (let j = 0; j < n; j++) {
      curr[j] = Math.max(left[j], right[j]) + P[i][j];
    }
    prev = curr;
  }
  
  return Math.max(...prev);
}

export default () => {
  console.log(maxPoints([[1,2,3],[1,5,1],[3,1,1]]));
  console.log(maxPoints([[1,5],[2,3],[4,2]]));
  console.log(maxPoints([[5,2,1,2],[2,1,5,2],[5,5,5,0]]));
  
};
