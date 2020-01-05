/**
 * 1295. Find Numbers with Even Number of Digits
 */

const Solution = (nums: number[]): number => {
    let count = 0;
    for (let num of nums) {
        if (num.toString().length % 2 == 0) {
            count++;
        }
    }
    return count;
};

export default (): void => {
    const nums = [12, 345, 2, 6, 7896];
    console.log(Solution(nums));
};
