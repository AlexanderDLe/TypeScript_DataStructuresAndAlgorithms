/**
 *  344. Reverse String
 */

const reverseString = (s: string[]): void => {
    let L = 0;
    let R = s.length - 1;

    while (L < R) {
        [s[L], s[R]] = [s[R], s[L]];
        L++;
        R--;
    }
    console.log(s);
};

export default () => {
    const s = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
};
