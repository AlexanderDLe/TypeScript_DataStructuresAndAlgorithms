"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minRemoveVerySlow = (s) => {
    let stack = [];
    let arr = s.split('');
    let pre = [];
    for (let char of arr) {
        if (char === '(') {
            stack.push(char);
            pre.push(char);
            continue;
        }
        if (char === ')') {
            if (stack.length && stack[stack.length - 1] === '(') {
                stack.pop();
                pre.push(char);
            }
            continue;
        }
        pre.push(char);
    }
    let result = [];
    for (let i = pre.length - 1; i >= 0; i--) {
        let char = pre[i];
        if (char === ')') {
            stack.push(char);
            result.unshift(char);
            continue;
        }
        if (char === '(') {
            if (stack.length && stack[stack.length - 1] === ')') {
                stack.pop();
                result.unshift(char);
            }
            continue;
        }
        result.unshift(char);
    }
    return result.join('');
};
const minRemove = (s) => {
    const stack = [];
    const arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        if (char === '(') {
            stack.push(i);
        }
        if (char === ')') {
            if (stack.length && arr[stack[stack.length - 1]] === '(') {
                stack.pop();
                // Mistake: Forgot to contine - which always caused empty string assignment
                continue;
            }
            // Mistake: Accidentally used === instead of =
            arr[i] = '';
        }
    }
    while (stack.length) {
        arr[stack.pop()] = '';
    }
    return arr.join('');
};
exports.default = () => {
    console.log(minRemove("lee(t(c)o)de)"));
    console.log(minRemove("a)b(c)d"));
    console.log(minRemove("))(("));
    console.log(minRemove("())()((("));
};
