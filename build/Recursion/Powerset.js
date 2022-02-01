"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const powersetRecursion = (array) => {
    let result = [];
    const recurse = (index, subarr) => {
        if (index === array.length) {
            result.push([...subarr]);
            return;
        }
        recurse(index + 1, subarr);
        recurse(index + 1, [...subarr, array[index]]);
    };
    recurse(0, []);
    return result;
};
const powerset = (array) => {
    let result = [[]];
    for (let num of array) {
        let len = result.length;
        for (let i = 0; i < len; i++) {
            let subset = result[i];
            result.push([...subset, num]);
        }
    }
    return result;
};
exports.default = () => {
    const array = [1, 2, 3];
    console.log(powerset(array));
};
