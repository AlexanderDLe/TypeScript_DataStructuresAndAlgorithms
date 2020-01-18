/**
 * 11. Container With Most Water
 */

const maxArea = (height: number[]): number => {
    let L = 0;
    let R = height.length - 1;
    let result = 0;

    while (L < R) {
        let min = Math.min(height[L], height[R]);
        result = Math.max(result, min * (R - L));
        if (height[L] <= height[R]) L++;
        else R--;
    }

    return result;
};

export default () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    console.log(maxArea(height));
};
