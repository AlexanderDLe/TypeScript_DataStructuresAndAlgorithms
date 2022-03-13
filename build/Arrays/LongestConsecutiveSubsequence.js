"use strict";
/**
 * 128. Longest Consecutive Subsequence
 *
 * [0,3,7,2,5,8,6,0,1,10] -> 0, 1, 2, 3, , 6, 7, 8
 *
 * {
 *  0: 1
 *  3: 1
 *  7: 0
 *  2: 1
 *  5: 0
 *  8: 0
 *  6: 0
 *  0: 0
 *  1: 1
 * 10: 0
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
const longestConsecutiveSubsequenceDiscovery = (nums) => {
    let map = {};
    for (let num of nums)
        map[num] = 0;
    let maxSubsequence = 0;
    for (let num of nums) {
        if (map[num])
            continue;
        let currSubsequence = 1;
        let left = num - 1;
        let right = num + 1;
        map[num] = 1;
        while (map[left]) {
            map[left] = 1;
            currSubsequence++;
            left--;
        }
        while (map[right]) {
            map[right] = 1;
            currSubsequence++;
            right++;
        }
        maxSubsequence = Math.max(maxSubsequence, currSubsequence);
    }
    return maxSubsequence;
};
const longestConsecutiveSubsequence = (nums) => {
    const set = new Set();
    for (let num of nums) {
        set.add(num);
    }
    let longestSubsequence = 0;
    for (let num of nums) {
        if (set.has(num - 1))
            continue;
        let currSubsequence = 1;
        let currNum = num + 1;
        while (set.has(currNum)) {
            currSubsequence++;
            currNum++;
        }
        longestSubsequence = Math.max(longestSubsequence, currSubsequence);
    }
    return longestSubsequence;
};
exports.default = () => {
    const nums1 = [100, 4, 200, 1, 3, 2];
    const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    console.log(longestConsecutiveSubsequenceDiscovery(nums1));
    console.log(longestConsecutiveSubsequenceDiscovery(nums2));
};
