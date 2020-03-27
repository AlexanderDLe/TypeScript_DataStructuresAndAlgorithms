/**
 *  13. Roman To isInteger
 */

const romanToInt = (s: string): number => {
    const T: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = T[s[s.length - 1]];

    for (let i = s.length - 2; i >= 0; i--) {
        if (T[s[i]] < T[s[i + 1]]) total -= T[s[i]];
        else total += T[s[i]];
    }

    return total;
};

export default () => {
    const input = 'XXIV';
    console.log(romanToInt(input));
};
