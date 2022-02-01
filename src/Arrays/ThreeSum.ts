/**
 *  15. 3Sum
 */
import { PrintArray } from "../utils/Utilities";

const threeSumA = (nums: number[]): number[][] => {
    let result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let T = 0; T < nums.length - 2; T++) {
        if (nums[T] > 0) break;
        let L = T + 1;
        let R = nums.length - 1;
        while (L < R) {
            let sum = nums[L] + nums[R] + nums[T];
            if (sum === 0) {
                result.push([nums[T], nums[L], nums[R]]);
                while (nums[L] === nums[L + 1]) L++;
                while (nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) L++;
            else R--;
        }
        while (nums[T] === nums[T + 1]) T++;
    }

    return result;
};

const threeSumB = (nums: number[]): number[][] => {
    let result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let L = 0; L < nums.length - 2; L++) {
        if (nums[L] > 0) break;
        let M = L + 1;
        let R = nums.length - 1;

        while (M < R) {
            let sum = nums[L] + nums[M] + nums[R];
            if (sum === 0) {
                result.push([nums[L], nums[M], nums[R]]);
                while (nums[M] === nums[M + 1]) M++;
                while (nums[R] === nums[R - 1]) R--;
                M++;
                R--;
            } else if (sum < 0) {
                M++;
            } else if (sum > 0) {
                R--;
            }
            while (nums[L] === nums[L + 1]) L++;
        }
    }

    return result;
};

const threeSumC = (nums: number[]): number[][] => {
    let result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let T = 0; T < nums.length - 2; T++) {
        if (nums[T] > 0) break;
        let L = T + 1;
        let R = nums.length - 1;

        while (L < R) {
            let sum = nums[T] + nums[L] + nums[R]

            if (sum === 0) {
                result.push([nums[T], nums[L], nums[R]]);
                while (nums[L] === nums[L + 1]) L++;
                while (nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else R--;
        }
        while (nums[T] === nums[T + 1]) T++;
    }

    return result;
}

type Triplet = [number, number, number];
const threeSumWithTarget = (array: number[], targetSum: number): Triplet[] => {
    array = array.sort((a, b) => a - b);
    let result: Triplet[] = [];

    for (let L = 0; L < array.length - 2; L++) {
        let LNum = array[L];
        let M = L + 1;
        let R = array.length - 1;
        
        while (M < R) {
            let MNum = array[M];
            let RNum = array[R];
            let sum = LNum + MNum + RNum;
            
            if (sum === targetSum) {
                result.push([LNum, MNum, RNum]);
                while (MNum === array[M + 1]) M++;
                while (RNum === array[R + 1]) R--;
                M++;
                R--;
            } else if (sum > targetSum) {
                R--;
            } else {
                M++;
            }
        }
    }

    return result;
}

export default () => {
    const nums1 = [-1, 0, 1, 2, -1, -4];
    const nums2 = [12, 3, 1, 2, -6, 5, -8, 6];
    // console.log(threeSumC(nums1));
    console.log(threeSumWithTarget(nums2, 0));
};
