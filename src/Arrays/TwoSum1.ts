/**
 * 1. Two Sum 1
 */
import { PrintArray, PrintObject } from '../utils/Utilities';

interface ObjectLiteral {
    [key: number]: number;
}
const twoSum = (nums: number[], target: number): number[] => {
    let obj: ObjectLiteral = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj) {
            return [i, obj[nums[i]]];
        }
        
        obj[target - nums[i]] = i;
    }
}


let twoSumOld = (nums: number[], target: number): number[] => {
    let answer = [0, 0];
    let map: ObjectLiteral = {};

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (map[difference]) {
            answer[0] = map[difference] - 1;
            answer[1] = i;
            break;
        } else {
            map[nums[i]] = i + 1;
        }
    }

    PrintObject(map);
    return answer;
};

export default () => {
    let nums = [2, 7, 11, 15];
    PrintArray(twoSum(nums, 9));
};
