"use strict";
/**
 * 279. Perfect Squares
 */
Object.defineProperty(exports, "__esModule", { value: true });
const numSquares = (n) => {
    if (!n)
        return 0;
    const squares = [];
    for (let i = 1; i <= n; i++) {
        if (i * i <= n)
            squares.push(i * i);
        else
            break;
    }
    const DP = new Array(n + 1).fill(n + 1);
    for (let i = 1; i <= n; i++) {
        if (squares.includes(i))
            DP[i] = 1;
        else {
            for (let square of squares) {
                if (square > i)
                    break;
                DP[i] = Math.min(DP[i], DP[i - square] + 1);
            }
        }
    }
    return DP[n];
};
exports.default = () => {
    console.log(numSquares(13));
};
