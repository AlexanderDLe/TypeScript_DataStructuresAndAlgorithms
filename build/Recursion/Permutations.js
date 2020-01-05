"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 46. Permutations
 */
var Utilities_1 = require("../utils/Utilities");
var permute = function (nums) {
    var result = [];
    var recursion = function (index) {
        var _a, _b;
        if (index === nums.length) {
            result.push(nums.slice(0));
        }
        for (var i = index; i < nums.length; i++) {
            _a = [nums[i], nums[index]], nums[index] = _a[0], nums[i] = _a[1];
            recursion(index + 1);
            _b = [nums[i], nums[index]], nums[index] = _b[0], nums[i] = _b[1];
        }
    };
    recursion(0);
    return result;
};
exports.default = (function () {
    var nums = [1, 2, 3];
    Utilities_1.PrintMatrix(permute(nums));
});
