"use strict";
/**
 *  1213. Intersection of 3 Sorted Arrays
 */
Object.defineProperty(exports, "__esModule", { value: true });
const intersectSets = (arr1, arr2, arr3) => {
    const set2 = new Set();
    const set3 = new Set();
    for (let num of arr2)
        set2.add(num);
    for (let num of arr3)
        set3.add(num);
    const result = [];
    for (let num of arr1) {
        if (set2.has(num) && set3.has(num))
            result.push(num);
    }
    return result;
};
const intersectPointers = (arr1, arr2, arr3) => {
    const result = [];
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
        let val1 = arr1[p1];
        let val2 = arr2[p2];
        let val3 = arr3[p3];
        let min = Math.min(val1, val2, val3);
        if (val1 === val2 && val1 === val3)
            result.push(val1);
        if (val1 === min)
            p1++;
        if (val2 === min)
            p2++;
        if (val3 === min)
            p3++;
    }
    return result;
};
exports.default = () => {
    console.log(intersectPointers([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]));
};
