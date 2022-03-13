/**
 * Grokking the Coding Interview
 * 1. Average Contiguous Subarrays of Size K
*/

const removeDuplicates = (arr: number[]): number => {
    for (let L = 0; L < arr.length; L++) {
        let R = L + 1;

        while (R < arr.length && arr[L] === arr[R]) {
            arr.splice(R, 1)
        }
    }

    return arr.length;
}

export default () => {
    let arr1 = [2, 3, 3, 3, 6, 9, 9];
    let arr2 = [2, 2, 2, 11];

    console.log(removeDuplicates(arr1));
    console.log(removeDuplicates(arr2));
};
