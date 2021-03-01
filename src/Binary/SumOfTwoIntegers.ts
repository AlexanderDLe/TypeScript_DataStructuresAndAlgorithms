/**
 *  371. Sum of Two Integers
 */

const getSumB = (a: number, b: number): number => {
    let carry;

    while (b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    return a;
};

const getSum = (a: number, b: number): number => {
    let carry;

    while (b) {
        console.log(`a: ${a.toString(2)} - b: ${b.toString(2)}`);
        carry = a & b;
        console.log('carry:' + carry.toString(2));
        a ^= b;
        console.log('a:' + a.toString(2));
        b = carry << 1;
        console.log('b:' + b.toString(2) + '\n');
    }

    return a;
};

export default () => {
    console.log(getSum(15, 20));
};
