/**
 * 191. Number of 1 Bits
 */

const hammingWeight = (n: number): number => {
    let sum = 0;
    
    while(n != 0) {
        sum += n & 1;
        n = n >>> 1;
    }
    
    return sum;
};

export default () => {
    console.log(hammingWeight(10));
};
