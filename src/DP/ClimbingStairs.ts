/**
 * 70. Climbing Stairs
 *
 * DP Approach: Solve subproblems.
 * To get to n, you must have taken a limited
 * number of options to get there.
 */

const climbStairsB = (n: number): number => {
    let dp: number[] = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }

    return dp[n];
}

const climbStairsDP = (n: number): number => {
    let DP = new Array(n);
    DP[0] = 1;
    DP[1] = 1;
    for (let i = 2; i <= n; i++) {
        DP[i] = DP[i - 1] + DP[i - 2];
    }

    return DP[n];
};

const climbStairsMemo = (n: number): number => {
  let memo: { [key: number]: number } = {};
    if (n < 2) return 1;
    if (memo[n]) return memo[n];
    else {
        memo[n] = climbStairsMemo(n - 2) + climbStairsMemo(n - 1);
    }
    return memo[n];
};

const climbStairsC = (n: number): number => {
    // 0:1, 1:1, 2:2, 3:3, 4:5, 5:8
    let res = 0;
    let arr = [1, 1, 2];

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
}

const climbStairs = (n: number): number => {
  const DP = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    DP[i] = DP[i - 1] + DP[i - 2];
  }

  return DP[n];
}

export default () => {
    // console.log(climbStairsMemo(4));
    // console.log(climbStairsDP(4));
    console.log(climbStairs(4));
};
