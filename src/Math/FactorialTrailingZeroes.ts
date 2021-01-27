/**
 *  172. Factorial Trailing Zeroes
 */

const trailingZeroes = (n: number): number => {
    let zeroes = 0;

    for (let i = 5; i <= n; i *= 5) {
        zeroes += Math.floor(n / i);
        console.log('n: ' + n + ' || i: ' + i + ' || zeroes: ' + zeroes);
    }

    return zeroes;
};

export default () => {
    console.log(trailingZeroes(125));
};
