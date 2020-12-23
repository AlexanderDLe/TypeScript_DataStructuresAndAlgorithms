/**
 *  217. Contains Duplicate
 */

const containsDuplicate = (nums: number[]): boolean => {
    let set = new Set([]);

    for (let i of nums) {
        if (set.has(i)) return true;
        set.add(i);
    }
    return false;
};

const containsDuplicateOld = (nums: number[]): boolean => {
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
