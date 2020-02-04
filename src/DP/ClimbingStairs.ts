/**
 * 70. Climbing Stairs
 *
 * DP Approach: Solve subproblems.
 * To get to n, you must have taken a limited
 * number of options to get there.
 */

const climbStairsDP = (n: number): number => {
    let DP = new Array(n);
    DP[0] = 1;
    DP[1] = 1;
    for (let i = 2; i <= n; i++) {
        DP[i] = DP[i - 1] + DP[i - 2];
    }

    return DP[n];
};

let memo: { [key: number]: number } = {};
const climbStairsMemo = (n: number): number => {
    if (n < 2) return 1;
    if (memo[n]) return memo[n];
    else {
        memo[n] = climbStairsMemo(n - 2) + climbStairsMemo(n - 1);
    }
    return memo[n];
};

export default () => {
    console.log(climbStairsMemo(4));
    console.log(climbStairsDP(4));
};
