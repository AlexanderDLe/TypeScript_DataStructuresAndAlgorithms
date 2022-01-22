"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const subsets = (arr) => {
    let result = [];
    const recurse = (index, subarr) => {
        if (index === arr.length) {
            result.push(subarr.slice());
            return;
        }
        recurse(index + 1, subarr);
        recurse(index + 1, [...subarr, arr[index]]);
    };
    recurse(0, []);
    return result;
};
exports.default = () => {
    let arr1 = [1, 3, 3];
    let arr2 = [1, 5, 3];
    console.log(subsets(arr1));
    console.log(subsets(arr2));
};
