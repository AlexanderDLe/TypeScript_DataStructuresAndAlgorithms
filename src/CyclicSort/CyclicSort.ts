/**
 * Grokking the Coding Interview
 * 
*/

import { PrintArray } from "../utils/Utilities";

const cyclicSort = (meetings: number[]): number[] => {
    for (let i = 0; i < meetings.length; i++) {
        let expectedVal = i + 1;
        let currVal = meetings[i];

        while (currVal !== expectedVal) {
            [meetings[i], meetings[currVal - 1]] = [meetings[currVal - 1], meetings[i]];
            currVal = meetings[i];
        }
    }

    return meetings;
}

export default () => {
    let arr1 = [3, 1, 5, 4, 2];
    let arr2 = [2, 6, 4, 3, 1, 5];
    let arr3 = [1, 5, 6, 4, 3, 2];

    console.log(cyclicSort(arr1));
    console.log(cyclicSort(arr2));
    console.log(cyclicSort(arr3));
};