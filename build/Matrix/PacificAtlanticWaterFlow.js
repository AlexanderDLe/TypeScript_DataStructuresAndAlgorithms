"use strict";
/**
 * 417. Pacific Atlantic Water Flow
   
    1  2  2  3  5
    3  2  3  4  4
    2  4  5  3  1
    6  7  1  4  5
    5  1  1  2  4
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pacificAtlantiA = (heights) => {
    let rows = heights.length;
    let cols = heights[0].length;
    let res = [];
    let path = [];
    for (let row = 0; row < rows; row++) {
        path.push(new Array(cols).fill(0));
    }
    const outOfBounds = (row, col) => {
        if (row < 0 || row >= rows)
            return true;
        if (col < 0 || col >= cols)
            return true;
        return false;
    };
    const getOcean = (row, col) => {
        if (row < 0 || col < 0)
            return [true, false];
        if (row >= rows || col >= cols)
            return [false, true];
    };
    const flow = (row, col, prev) => {
        if (outOfBounds(row, col))
            return getOcean(row, col);
        if (path[row][col] === 1)
            return [false, false];
        if (heights[row][col] > prev)
            return [false, false];
        let curr = heights[row][col];
        path[row][col] = 1;
        let [topP, topA] = flow(row - 1, col, curr);
        let [rightP, rightA] = flow(row, col + 1, curr);
        let [botP, botA] = flow(row + 1, col, curr);
        let [leftP, leftA] = flow(row, col - 1, curr);
        let pacific = topP || rightP || botP || leftP;
        let atlantic = topA || rightA || botA || leftA;
        path[row][col] = 0;
        return [pacific, atlantic];
    };
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let [pacific, atlantic] = flow(row, col, Infinity);
            if (pacific && atlantic)
                res.push([row, col]);
        }
    }
    return res;
};
const pacificAtlantic = (heights) => {
    const rows = heights.length;
    const cols = heights[0].length;
    const result = [];
    const pac = new Set();
    const atl = new Set();
    const outOfBounds = (row, col) => {
        if (row < 0 || row >= rows)
            return true;
        if (col < 0 || col >= cols)
            return true;
        return false;
    };
    const getCode = (row, col) => {
        return `${row}-${col}`;
    };
    const DFS = (row, col, prev, set) => {
        if (outOfBounds(row, col))
            return;
        let code = getCode(row, col);
        let curr = heights[row][col];
        if (set.has(code))
            return;
        if (curr < prev)
            return;
        set.add(code);
        DFS(row - 1, col, curr, set);
        DFS(row + 1, col, curr, set);
        DFS(row, col - 1, curr, set);
        DFS(row, col + 1, curr, set);
    };
    for (let col = 0; col < cols; col++) {
        DFS(0, col, -Infinity, pac);
        DFS(rows - 1, col, -Infinity, atl);
    }
    for (let row = 0; row < rows; row++) {
        DFS(row, cols - 1, -Infinity, atl);
        DFS(row, 0, -Infinity, pac);
    }
    pac.forEach((x) => {
        if (atl.has(x)) {
            let code = x.split('-');
            result.push([Number(code[0]), Number(code[1])]);
        }
    });
    return result;
};
exports.default = () => {
    const heights = [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4]
    ];
    console.log(pacificAtlantic(heights));
};
