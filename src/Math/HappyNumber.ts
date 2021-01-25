/**
 *  202. Happy Number
 */

const isHappy = (n: number): boolean => {
    const set = new Set([]);

    while (n) {
        if (n === 1) return true;
        let sum = 0;
        let str = n.toString();

        for (let digit of str) {
            sum += Math.pow(parseInt(digit), 2);
        }

        if (set.has(sum)) return false;
        else set.add(sum);

        n = sum;
    }

    return false;
};

export default () => {
    console.log(isHappy(19));
};
