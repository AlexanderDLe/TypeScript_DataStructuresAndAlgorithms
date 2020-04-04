/**
 *  371. Sum of Two Integers
 */

const getSum = (a: number, b: number): number => {
    let carry;

    while (b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }

    return a;
};

export default () => {
    console.log(getSum(1, 2));
};
