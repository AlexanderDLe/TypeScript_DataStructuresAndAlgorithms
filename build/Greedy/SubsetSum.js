"use strict";
/**
 * Grokking the Coding Interview
 *
 *  Each cell in the DP matrix will represent whether the subset(row)
 *  contains a combination that equals to the sum of its column.
 *
 *  Set the value to true when the currentSum iteration is equal
 *  to that value of the first item.
 *
 *  nums = [1, 2, 3, 4] sum = 6
 *
 *  Initialzing the DP Matrix Part 1
 *
 *    0   1   2   3   4   5   6     <-- Each column represents its sum
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3, 4}
 *    ^
 *  Note that all cells in column 0 is 1 (true).
 *  All sets contain a subset that equal to 0.
 *  That subset is the empty set {}.
 *
 ************************************************************************
 *
 *  Initialzing the DP Matrix Part 2
 *
 *    0   1   2   3   4   5   6
 *  [ 1 | 1 | 0 | 0 | 0 | 0 | 0 ]   {1}             <--- Row 0
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3, 4}
 *        ^
 *  Note DP[0][1] === 1.
 *
 *  The all cells in row DP[0] represent a true(1)/false(0) value.
 *  The cell is true when the set of that row {1} contains a subset
 *  that is equal to the cell's respective column.
 *
 *  In this case the row set is {1}. The subset that contains
 *  the sum equal to the column sum is {1}.
 *
 ************************************************************************
 *
 *    0   1   2   3   4   5   6
 *  [ 1 | 1 | 0 | 0 | 0 | 0 | 0 ]   {1}
 *  [ 1 | 1 | 0 | 0 | 0 | 0 | 0 ]   {1, 2}          <--- Row 1
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3, 4}
 *        ^
 *  Note DP[1][1] === 1.
 *
 *  Column Sum = 1
 *  Row Set = {1, 2}
 *  Subset that contains sum equal to Column Sum is {1}
 *
 ************************************************************************
 *
 *    0   1   2   3   4   5   6
 *  [ 1 | 1 | 0 | 0 | 0 | 0 | 0 ]   {1}
 *  [ 1 | 1 | 1 | 0 | 0 | 0 | 0 ]   {1, 2}          <--- Row 1
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3, 4}
 *            ^
 *  Note DP[1][2] === 1.
 *
 *  Column Sum = 2
 *  Row Set = {1, 2}
 *  Subset that contains sum equal to Column Sum is {2}
 *
 ************************************************************************
 *
 *    0   1   2   3   4   5   6
 *  [ 1 | 1 | 0 | 0 | 0 | 0 | 0 ]   {1}
 *  [ 1 | 1 | 1 | 1 | 0 | 0 | 0 ]   {1, 2}          <--- Row 1
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3, 4}
 *                ^
 *  Note DP[1][3] === 1.
 *
 *  Column Sum = 3
 *  Row Set = {1, 2}
 *  Subset that contains sum equal to Column Sum is {1, 2}
 *
 ************************************************************************
 *
 *    0   1   2   3   4   5   6
 *  [ 1 | 1 | 0 | 0 | 0 | 0 | 0 ]   {1}
 *  [ 1 | 1 | 1 | 1 | 0 | 0 | 0 ]   {1, 2}          <--- Row 1
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3}
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3, 4}
 *                ^
 *  Note DP[1][4] === 0.
 *
 *  Column Sum = 4
 *  Row Set = {1, 2}
 *  There is no subset in this row that equals 4.
 *
 ************************************************************************
 *
 *    0   1   2   3   4   5   6
 *  [ 1 | 1 | 0 | 0 | 0 | 0 | 0 ]   {1}
 *  [ 1 | 1 | 1 | 1 | 0 | 0 | 0 ]   {1, 2}
 *  [ 1 | 1 | 1 | 1 | 1 | 0 | 0 ]   {1, 2, 3}       <--- Row 2
 *  [ 1 | 0 | 0 | 0 | 0 | 0 | 0 ]   {1, 2, 3, 4}
 *                    ^
 *  Note DP[2][4] === 0.
 *
 *  Column Sum = 4
 *  Row Set = {1, 2, 3}
 *  Subset that contains sum equal to Column Sum is {1, 3}
 *
 *  Programatically, we first check if the cell above the current cell
 *  returns true (1). If so, then this cell also returns true since the previous
 *  set is a subset of the current set.
 *
 *  If the cell above returns false, we can check to see if the new value (3)
 *  of the subset can add to a previous value to equal the column sum.
 *
 *  In the previous row, search for the columnSum (4) - newValue (3) = 1.
 *  DP[previous row][columnSum - newValue]
 *
 *  In this example, that cell will exist as true.
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
let Heap = require('collections/heap');
const subsetSumTopDown = (nums, sum) => {
    let DP = {};
    const recurse = (index, currSum) => {
        DP[index] = DP[index] || [];
        if (DP[index][currSum])
            return DP[index][currSum];
        if (currSum === sum)
            return true;
        if (index === nums.length)
            return false;
        let withoutTake = recurse(index + 1, currSum);
        let newSum = currSum + nums[index];
        let withTake = recurse(index + 1, newSum);
        DP[index][newSum] = withTake || withoutTake;
        return DP[index][newSum];
    };
    let result = recurse(0, 0);
    (0, Utilities_1.PrintObject)(DP);
    return result;
};
const subsetSumBottomUp = (nums, sum) => {
    let len = nums.length;
    let DP = new Array(len)
        .fill(0)
        .map(() => new Array(sum + 1).fill(0));
    DP.forEach(row => row[0] = 1);
    for (let currSum = 1; currSum <= sum; currSum++) {
        if (currSum === nums[0])
            DP[0][currSum] = 1;
    }
    for (let i = 1; i < len; i++) {
        let value = nums[i];
        for (let columnSum = 1; columnSum <= sum; columnSum++) {
            if (DP[i - 1][columnSum]) {
                DP[i][columnSum] = 1;
            }
            else if (DP[i - 1][columnSum - value]) {
                DP[i][columnSum] = 1;
            }
        }
    }
    return DP[len - 1][sum] === 1 ? true : false;
};
exports.default = () => {
    console.log(subsetSumBottomUp([1, 2, 3, 4], 6));
    console.log(subsetSumBottomUp([1, 2, 7, 1, 5], 10));
    console.log(subsetSumBottomUp([1, 3, 4, 8], 6));
};
