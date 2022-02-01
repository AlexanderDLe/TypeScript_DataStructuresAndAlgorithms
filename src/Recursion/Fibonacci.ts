/**
 * 46. Permutations
 */
import { PrintMatrix } from '../utils/Utilities';

const fibonacciArray = (n: number): number => {
    const DP = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        DP[i] = DP[i - 1] + DP[i - 2];
    }

    return DP[n];
}

const fibonacciMemo = (n: number): number => {
    const memo: any = {};

    const recurse = (num: number): number => {
        if (memo[num]) return memo[num];
        if (num <= 2) return 1;

        return recurse(num - 1) + recurse(num - 2);
    }

    return recurse(n);
}
// 0 1 1
export default () => {
    console.log(fibonacciArray(3));
};
