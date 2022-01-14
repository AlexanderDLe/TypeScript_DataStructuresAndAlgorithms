"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const cycleInCircularArray = (arr) => {
    let len = arr.length;
    let forward = false;
    let backward = false;
    const iterate = (index) => {
        let nextIndex = index + arr[index];
        if (arr[index] > 0)
            forward = true;
        else if (arr[index] < 0)
            backward = true;
        if (nextIndex >= len)
            nextIndex = nextIndex % len;
        if (nextIndex < 0)
            nextIndex = len - nextIndex;
        return nextIndex;
    };
    for (let i = 0; i < arr.length; i++) {
        forward = false;
        backward = false;
        let s = i;
        let f = i;
        while (true) {
            s = iterate(s);
            f = iterate(iterate(f));
            if (s === f)
                break;
        }
        if (forward && !backward)
            return true;
        if (!forward && backward)
            return true;
    }
    return false;
};
exports.default = () => {
    let arr1 = [1, 2, -1, 2, 2];
    console.log(cycleInCircularArray(arr1));
    let arr2 = [2, 2, -1, 2];
    console.log(cycleInCircularArray(arr2));
    let arr3 = [2, 1, -1, -2];
    console.log(cycleInCircularArray(arr3));
};
