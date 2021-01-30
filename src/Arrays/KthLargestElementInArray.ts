/**
 * 215. Kth Largest Element In An Array
 */

const findKthLargestSortMethod = (nums: number[], k: number): number => {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

const findKthLargest = (nums: number[], k: number): number => {
    const partition = (lo: number, hi: number): number => {
        let pivot = nums[hi];
        let i = lo;

        for (let j = lo; j < hi; j++) {
            if (nums[j] <= pivot) {
                swap(i, j);
                i++;
            }
        }
        swap(i, hi);
        return i;
    }
    const swap = (i: number, j: number): void => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    
    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;

    while (lo < hi) {
        let j = partition(lo, hi);

        if (j < k) {
            lo = j + 1;
        } else if (j > k) {
            hi = j - 1;
        } else {
            break;
        }
    }

    return nums[k];
};

export default () => {
    const nums = [3,2,1,5,6,4];
    let k = 2;
    console.log(findKthLargest(nums, k));
};
