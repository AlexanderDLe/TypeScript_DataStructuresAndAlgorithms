/**
 *  326. Power Of Three
 */

const isPowerOfThree = (n: number): boolean => {
    let i = 3;

    if (n < 1) return false;
    else if (n === 1) return true;

    while (i <= n) {
        if (i === n) return true;
        i *= 3;
    }

    return false;
};

export default () => {
    let test = 0;
    console.log(isPowerOfThree(test))
};
