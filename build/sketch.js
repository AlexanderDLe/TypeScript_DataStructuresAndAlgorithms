"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareStrings(email) {
    function outer() {
        var b = 10;
        var c = 100;
        function inner() {
            var a = 20;
            console.log('a= ' + a + ' b= ' + b);
            a++;
            b++;
        }
        return inner;
    }
}
exports.default = () => {
    let str = 'minder@mindera.com';
    // console.log(outer());
};
