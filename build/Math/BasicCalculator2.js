"use strict";
/**
 *  227. Basic Calculator
 *
 *  3+5/2
 *
 *  3+5/2
 */
Object.defineProperty(exports, "__esModule", { value: true });
const calculate = (s) => {
    if (!s || !s.length)
        return 0;
    s = s.replace(/\s/g, '');
    let st = [];
    let n = 0;
    let sign = '+';
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (/\d/.test(c))
            n = n * 10 + Number(c);
        if (/\D/.test(c) || i === s.length - 1) {
            if (sign === '-')
                st.push(-n);
            else if (sign === '+')
                st.push(n);
            else if (sign === '*')
                st.push(st.pop() * n);
            else if (sign === '/')
                st.push(~~(st.pop() / n));
            sign = c;
            n = 0;
        }
    }
    return st.reduce((a, b) => a + b);
};
exports.default = () => {
    console.log(calculate("3+2*2"));
    console.log(calculate(" 3/2 "));
    console.log(calculate(" 3+5 / 2 "));
};
