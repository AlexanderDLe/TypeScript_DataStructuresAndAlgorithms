const Solution = (nums: number[]): number => {
    let count = 0;
    for (let num of nums) {
        if (num.toString().length % 2 == 0) {
            count++;
        }
    }
    return count;
};

const FindNumbersWithEvenDigits = (): void => {
    const nums = [12, 345, 2, 6, 7896];
    console.log(Solution(nums));
};

export default FindNumbersWithEvenDigits;
