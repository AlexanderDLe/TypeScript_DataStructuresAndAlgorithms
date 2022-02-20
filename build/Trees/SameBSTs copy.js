"use strict";
/**
 * AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.BST = BST;
const sameBSTs = (array1, array2) => {
    const sameBSTs = (start1, start2, minVal, maxVal) => {
        if (array1[start1] !== array2[start2])
            return false;
        if (start1 === -1 || start2 === -1)
            return start1 === start2;
        let leftStartIndex1 = getFirstSmallerIndex(array1, start1, minVal);
        let leftStartIndex2 = getFirstSmallerIndex(array2, start2, minVal);
        let rightStartIndex1 = getFirstBiggerIndex(array1, start1, maxVal);
        let rightStartIndex2 = getFirstBiggerIndex(array2, start2, maxVal);
        let currValue = array1[start1];
        return sameBSTs(leftStartIndex1, leftStartIndex2, minVal, currValue) &&
            sameBSTs(rightStartIndex1, rightStartIndex2, currValue, maxVal);
    };
    const getFirstSmallerIndex = (array, start, minVal) => {
        for (let i = start + 1; i < array.length; i++) {
            let curr = array[i];
            let root = array[start];
            if (curr < root && curr >= minVal)
                return i;
        }
        return -1;
    };
    const getFirstBiggerIndex = (array, start, maxVal) => {
        for (let i = start + 1; i < array.length; i++) {
            let curr = array[i];
            let root = array[start];
            if (curr >= root && curr < maxVal)
                return i;
        }
        return -1;
    };
    return sameBSTs(0, 0, -Infinity, Infinity);
};
exports.default = () => {
    let array1 = [10, 15, 8, 12, 94, 81, 5, 2, 11];
    let array2 = [10, 8, 5, 15, 2, 12, 11, 94, 81];
    console.log(sameBSTs(array1, array2));
};
