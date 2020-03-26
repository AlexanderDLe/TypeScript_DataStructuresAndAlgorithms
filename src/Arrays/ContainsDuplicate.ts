/**
 *  217. Contains Duplicate
 */

const containsDuplicate = (nums: number[]): boolean => {
    const table: { [key: number]: number } = {};

    for (let num of nums) {
        table[num] = (table[num] || 0) + 1;
        if (table[num] > 1) return true;
    }

    return false;
};

export default () => {
    const nums = [1, 2, 3, 1];
    console.log(containsDuplicate(nums));
};
