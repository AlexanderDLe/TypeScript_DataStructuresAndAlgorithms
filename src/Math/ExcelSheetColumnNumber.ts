/**
 *  171. Excel Sheet Column Number
 */

const titleToNumber = (s: string): number => {
    let number = 0;
    let exponent = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let val = s.charCodeAt(i) - 64;
        number += val * Math.pow(26, exponent);
        exponent++;
    }

    return number;
};

export default () => {
    const str = 'AAA';
    console.log(titleToNumber(str));
};
