"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addOperators = (num, target) => {
    const result = [];
    const DFS = (str, arr, total, prev) => {
        if (!str.length && total === target)
            result.push(arr.join(''));
        let len = str.length;
        if (str[0] === '0')
            len = 1;
        for (let i = 1; i <= len; i++) {
            const curr = +str.slice(0, i);
            const rest = str.slice(i);
            if (!arr.length)
                DFS(rest, [curr], curr, curr);
            else {
                DFS(rest, [...arr, '+', curr], total + curr, curr);
                DFS(rest, [...arr, '-', curr], total - curr, 0 - curr);
                const prod = prev * curr;
                DFS(rest, [...arr, '*', curr], total - prev + prod, prod);
            }
        }
    };
    DFS(num, [], 0, 0);
    return result;
};
exports.default = () => {
    console.log(addOperators("123", 6));
    // console.log(addOperators("232", 8));
    // console.log(addOperators("3456237490", 9191));
};
