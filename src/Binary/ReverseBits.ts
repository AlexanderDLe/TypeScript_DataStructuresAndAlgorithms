/**
 * 191. Number of 1 Bits
 */

const reverseBits = (n: number): number => {
    let result = 0;
    let count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n >>= 1;
    }
    
    return result;
};

export default () => {
    console.log(reverseBits(43261596));
};
