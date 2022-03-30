"use strict";
/**
 * 4. Median of Two Sorted Arrays
*/
Object.defineProperty(exports, "__esModule", { value: true });
const minimumDifferenceElement = (nums1, nums2) => {
    let A = nums1;
    let B = nums2;
    let total = A.length + B.length;
    let half = Math.floor(total / 2);
    let isOdd = total % 2 === 1;
    if (B.length < A.length)
        [A, B] = [B, A];
    let L = 0;
    let R = A.length - 1;
    while (true) {
        let i = Math.floor((R + L) / 2);
        let j = half - i - 2;
        let AL = i >= 0 ? A[i] : -Infinity;
        let BL = j >= 0 ? B[j] : -Infinity;
        let AR = i < A.length - 1 ? A[i + 1] : Infinity;
        let BR = j < B.length - 1 ? B[j + 1] : Infinity;
        console.log('----');
        console.log('L,R:', L, R);
        console.log('i,j:', i, j);
        console.log(AL, AR, BL, BR);
        if (AL <= BR && BL <= AR) {
            if (isOdd)
                return Math.min(AR, BR);
            return (Math.max(AL, BL) + Math.min(AR, BR)) / 2;
        }
        else if (AL > BR) {
            R = i - 1;
        }
        else {
            L = i + 1;
        }
    }
};
exports.default = () => {
    // console.log(minimumDifferenceElement([1,3], [2]));
    // console.log(minimumDifferenceElement([1,2], [3,4]));
    console.log(minimumDifferenceElement([1, 2, 3], [4, 5, 6]));
    // console.log(minimumDifferenceElement([1,2,3,4,5,6,7,8], [1,2,3,4]));
    // console.log(minimumDifferenceElement([1,2,3,4,5,6,7,8], [1,2,3,4,5]));
};
