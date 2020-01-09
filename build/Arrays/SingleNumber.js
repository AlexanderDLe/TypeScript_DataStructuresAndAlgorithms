"use strict";
/**
 * 136. Single Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../utils/Utilities");
var singleNumber = function (nums) {
    var set = new Set([]);
    var result;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var i = nums_1[_i];
        if (set.has(i))
            set.delete(i);
        else
            set.add(i);
    }
    set.forEach(function (val) {
        result = val;
    });
    return result;
};
exports.default = (function () {
    var nums = [4, 1, 2, 1, 2];
    Utilities_1.PrintArray(nums);
    console.log(singleNumber(nums));
});
