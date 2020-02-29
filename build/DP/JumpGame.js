"use strict";
/**
 *  55. Jump Game
 *
 *  canJumpA uses a DP array to track how far the true values
 *  can go within the array.
 *
 *  canJumpB works backwards and checks if the last index is reachable
 *  by an earlier index.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const canJumpA = (nums) => {
    const DP = new Array(nums.length).fill(false);
    DP[0] = true;
    for (let i = 0; i < DP.length; i++) {
        if (!DP[i])
            break;
        for (let j = 1; j <= nums[i]; j++) {
            if (i + j < DP.length)
                DP[i + j] = true;
            else
                break;
        }
    }
    return DP[nums.length - 1];
};
const canJumpB = (nums) => {
    let last = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= last)
            last = i;
    }
    return last <= 0;
};
exports.default = () => {
    const numsA = [2, 3, 1, 1, 4];
    const numsB = [3, 2, 1, 0, 4];
    const numsC = [0, 2, 3];
    console.log(canJumpB(numsA));
};
