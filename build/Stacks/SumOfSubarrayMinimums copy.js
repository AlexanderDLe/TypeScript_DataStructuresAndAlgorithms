"use strict";
/**
 * 907. Sum of Subarray Minimums
 *
 *
 *
 *          |
 *    |     |
 *  | |   | |
 *  | | | | |
 *  2 3 1 2 4
 *      ^
 *
 * Pstack [1]
 * Nstack [3]
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const subarrayMinsRef = (A) => {
    const M = Math.pow(10, 9) + 7;
    const PLE = [];
    const NLE = [];
    const Pstack = [];
    const Nstack = [];
    for (let i = 0; i < A.length; i++) {
        // Initialize. Why? 
        // PLE[i] initializes to (i + 1) because it is the distance from i to the START of the array.
        // This is important becuase if A[i] is the smallest value from A[0] -> A[i], then it shall be the
        // minimum value for all subarrays that include i -> 0
        //                      i
        // Example: arr: [3, 2, 1]
        //          PLE: [1, 2, 3]
        //                      ^----- 1 is the smallest value in arr, the distance from start is 3 elements.
        //                             therefore it is min value in [3,2,1], [2,1] and [1] (3 subarrays in which it is the smallest)
        PLE[i] = i + 1;
        // NLE[i] initializes to (A.length - i) because it is the distance from i to the END of the array.
        // Similar to the above, NLE[i] initializes the value as the distance from i to the END.
        // Important because if it is the smallest value from the right, it should be min value in all subarays from i to end.
        // Example: arr[1,2,3]
        //          NLE[3,2,1]
        //              ^---------------- 1 is the smallest value in arr, therefore the NLE has to show that it
        //                                [1], [1,2], [1,2,3] (3 subarrays in which it is the smallest)
        NLE[i] = A.length - i;
    }
    (0, Utilities_1.PrintArray)(A);
    (0, Utilities_1.PrintArray)(PLE);
    (0, Utilities_1.PrintArray)(NLE);
    for (let i = 0; i < A.length; i++) {
        let currVal = A[i];
        while (Pstack.length && Pstack[Pstack.length - 1].val > currVal)
            Pstack.pop();
        // We subtract (i - Pstack[Pstack.length - 1]) because we want the DISTNACE
        // from the current index to the INDEX of the PLE.
        PLE[i] = Pstack.length ? i - Pstack[Pstack.length - 1].index : i + 1;
        Pstack.push({ val: currVal, index: i });
        // PrintArray(PLE);
        // PrintArray(Pstack);
        while (Nstack.length && Nstack[Nstack.length - 1].val > currVal) {
            let prevIndex = Nstack.pop().index;
            NLE[prevIndex] = i - prevIndex;
        }
        Nstack.push({ val: currVal, index: i });
        // PrintArray(NLE);
        // PrintArray(Nstack);
    }
    // PrintArray(A);
    // PrintArray(PLE);
    // PrintArray(NLE);
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        // console.log(`-----------------`)
        // console.log(`i: ${i} | PLE[i]: ${PLE[i]} | NLE[i]: ${NLE[i]}`)
        // console.log(`${sum} + ${(PLE[i])} * ${(NLE[i])} * ${A[i]}`)
        sum = (sum + (PLE[i]) * (NLE[i]) * A[i]) % M;
    }
    return sum;
};
const subarrayMins = (A) => {
    const PLE = [];
    const NLE = [];
    const Pstack = [];
    const Nstack = [];
    for (let i = 0; i < A.length; i++) {
        PLE[i] = i + 1;
        NLE[i] = A.length - i;
    }
    for (let i = 0; i < A.length; i++) {
        let val = A[i];
        while (Pstack.length && Pstack[Pstack.length - 1].val > val)
            Pstack.pop();
        PLE[i] = Pstack.length ? i - Pstack[Pstack.length - 1].index : i + 1;
        Pstack.push({ val, index: i });
        while (Nstack.length && Nstack[Nstack.length - 1].val > val) {
            let prevIndex = Nstack.pop().index;
            NLE[prevIndex] = i - prevIndex;
        }
        Nstack.push({ val, index: i });
    }
    let sum = 0;
    let M = Math.pow(10, 9) + 7;
    for (let i = 0; i < A.length; i++) {
        sum = (sum + (A[i] * PLE[i] * NLE[i])) % M;
    }
    return sum;
};
exports.default = () => {
    console.log(subarrayMins([3, 1, 2, 4]));
    // console.log(subarrayMins([11,81,94,43,3]));
};
