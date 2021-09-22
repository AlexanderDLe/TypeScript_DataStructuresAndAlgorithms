"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parse(str) {
    let arr = str.split('.');
    return `${arr[0]}_${Date.now()}.${arr[1]}`;
}
exports.default = () => {
    let str = 'SD Dark.png';
    console.log(parse(str));
};
