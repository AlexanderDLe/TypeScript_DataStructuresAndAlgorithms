"use strict";
/**
 * 1295. Find Numbers with Even Number of Digits
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Solution = function (nums) {
    var count = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num.toString().length % 2 == 0) {
            count++;
        }
    }
    return count;
};
exports.default = (function () {
    var nums = [12, 345, 2, 6, 7896];
    console.log(Solution(nums));
});
