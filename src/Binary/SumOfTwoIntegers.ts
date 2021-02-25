/**
 *  371. Sum of Two Integers
 */

const getSum = (a: number, b: number): number => {
    let carry;

    while (b) {
        carry = a & b;
        console.log('carry:' +carry);
        a ^= b;
        console.log('a:' + a);
        b = carry << 1;
    }

    return a;
};

export default () => {
    console.log(getSum(15, 20));
};
