/**
 * 279. Perfect Squares
 */

const numSquares = (n: number): number => {
    if (!n) return 0;

    const squares: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (i * i <= n) squares.push(i * i);
        else break;
    }

    const DP = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        if (squares.includes(i)) DP[i] = 1;
        else {
            let min = n + 1;
            for (let square of squares) {
                if (square > i) break;
                min = Math.min(min, DP[i - square] + 1);
            }
            DP[i] = min;
        }
    }
    return DP[n];
};

export default () => {
    console.log(numSquares(13));
};
