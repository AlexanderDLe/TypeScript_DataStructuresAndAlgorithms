/**
 * Algo Expert
 */
import { PrintArray, PrintObject } from '../utils/Utilities';

const sortedSquaredArray = (array:number[]): number[] => {
    let result: number[] = [];

    let L = 0;
    let R = array.length - 1;

    while (L <= R) {
        let LNum = array[L];
        let RNum = array[R];

        if (LNum < 0 && RNum >= Math.abs(LNum)) {
            result.unshift(RNum * RNum);
            R--;
            continue;
        }

        if (Math.abs(LNum) >= Math.abs(RNum)) {
            result.unshift(LNum * LNum);
            L++;
        } else {
            result.unshift(RNum * RNum);
            R--;
        }
    }

    return result;
}

const sortedSquaredArray2 = (array:number[]): number[] => {
    let result: number[] = new Array(array.length).fill(0);

    let L = 0;
    let R = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        let LNum = array[L];
        let RNum = array[R];

        if (Math.abs(LNum) > Math.abs(RNum)) {
            result[i] = LNum * LNum;
            L++;
        } else {
            result[i] = RNum * RNum;
            R--;
        }
    }

    return result;
}

export default () => {
    
    let nums1 = [1, 2, 3, 5, 6, 8, 9];
    PrintArray(sortedSquaredArray(nums1));
    
    let nums2 = [-3, -1, 2, 3, 5, 6, 8, 9];
    PrintArray(sortedSquaredArray2(nums2));
};
