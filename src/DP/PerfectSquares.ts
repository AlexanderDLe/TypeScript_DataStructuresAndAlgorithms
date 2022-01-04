/**
 * 279. Perfect Squares
 */

const numSquaresA = (n: number): number => {
    if (!n) return 0;
    
    let squares: number[] = [];
    for (let i = 1; i <= n; i++) {
        if ((i * i) <= n) squares.push(i * i);
        else break;
    }
    console.log(squares);
    
    let DP: number[] = new Array(n + 1).fill(n + 1);
    for (let i = 1; i <= n; i++) {
        if (squares.includes(i)) DP[i] = 1;
        else {   
            for (let square of squares) {
                if (square > i) break;
                DP[i] = Math.min(DP[i], DP[i - square] + 1);
            }
        }
    }
    return DP[n];
}

const numSquaresB = (n: number): number => {
    if (!n) return 0;

    const squares: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (i * i <= n) squares.push(i * i);
        else break;
    }

    const DP = new Array(n + 1).fill(n + 1);
    for (let i = 1; i <= n; i++) {
        if (squares.includes(i)) DP[i] = 1;
        else {
            for (let square of squares) {
                if (square > i) break;
                DP[i] = Math.min(DP[i], DP[i - square] + 1);
            }
        }
    }
    return DP[n];
};

/* 
1 = 1
2 = 1 + DP[1]:1 = 2
3 = 1 + DP[2]:2 = 3
4 = 4
5 = 4 + DP[1]:1 = 2
6 = 4 + DP[2]:2 = 3
7 = 4 + DP[3]:3 = 3
8 = 4 + DP[4]:1 = 2
9 = 9
10 = 9 + DP[1]:1 = 2
11 = 9 + DP[2]:2 = 3
12 = 4 + DP[8]:2 = 3
13 = 9 + DP[4]:1 = 2
14 = 9 + DP[5]:2 = 3
15 = 9 + DP[6]:3 = 4
16 = 16
*/

const numSquares = (n: number): number => {
    let squares: number[] = [];
    let DP: number[] = new Array(n + 1).fill(0);

    for (let i = 1; i * i <= n; i++) {
        squares.push(i * i);
    }
    
    for (let i = 1; i <= n; i++) {
        let lowestSquares = n;

        for (let square of squares) {
            if (square > i) break;

            if (square === i) {
                lowestSquares = 1;
                break;
            } else if (square < i) {
                lowestSquares = Math.min(lowestSquares, 1 + DP[i - square])
            }
        }

        DP[i] = lowestSquares;
    }

    return DP[n];
}

export default () => {
    console.log(numSquares(16));
};
