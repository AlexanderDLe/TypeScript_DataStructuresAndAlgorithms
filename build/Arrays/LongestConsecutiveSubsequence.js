"use strict";
/**
 * 128. Longest Consecutive Subsequence
 *
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
const longestConsecutiveSubsequenceA = (nums) => {
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
const longestConsecutiveSubsequence = (nums) => {
    const set = new Set();
    for (let num of nums)
        set.add(num);
    let longestSubsequence = 0;
    for (let num of nums) {
        if (set.has(num - 1))
            continue;
        let currSequence = 1;
        let currNum = num;
        while (set.has(currNum + 1)) {
            currSequence++;
            currNum++;
        }
        longestSubsequence = Math.max(longestSubsequence, currSequence);
    }
    return longestSubsequence;
};
exports.default = () => {
    const nums1 = [100, 4, 200, 1, 3, 2];
    const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    console.log(longestConsecutiveSubsequence(nums1));
    console.log(longestConsecutiveSubsequence(nums2));
};
