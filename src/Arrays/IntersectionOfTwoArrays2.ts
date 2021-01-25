/**
 *  350. Intersection of Two Arrays II
 */

const intersect = (nums1: number[], nums2: number[]): number[] => {
    let res: number[] = [];

    let map: { [key: string]: number } = {};

    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }
    for (let num of nums2) {
        if (map[num] && map[num] > 0) {
            res.push(num);
            map[num]--;
        }
    }

     return res;
};

export default () => {
    let nums1 = [4, 9, 5];
    let nums2 = [9, 4, 9, 8, 4]
    console.log(intersect(nums1, nums2));
};
