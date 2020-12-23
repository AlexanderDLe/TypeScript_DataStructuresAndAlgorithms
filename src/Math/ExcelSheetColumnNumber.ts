/**
 *  171. Excel Sheet Column Number
 */

const titleToNumber = (s: string): number => {
    let total = 0;
    let exp = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let val = s.charCodeAt(i) - 64;
        total += Math.pow(26, exp) * val;
        exp++;
    }

    return total;
};

export default () => {
    const str = 'AB';
    console.log(titleToNumber(str));
};
