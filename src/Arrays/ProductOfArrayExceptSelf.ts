/**
 * 238. Product Of Array Except Self
 */
import { PrintArray } from '../utils/Utilities';

const productExceptSelf = (nums: number[]): number[] => {
    let result: number[] = new Array(nums.length).fill(1);

    let leftProduct = 1;
    let rightProduct = 1;

    for (let i = 1; i < nums.length; i++) {
        leftProduct *= nums[i - 1];
        result[i] *= leftProduct;
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        result[i] *= rightProduct;
    }

    return result;
};

export default () => {
    const nums = [1, 2, 3, 4];
    PrintArray(productExceptSelf(nums));
};
