"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareStrings(email) {
    if (typeof email !== 'string')
        throw 'Parameter is not a string.';
    let result = email[0];
    let maskOn = true;
    for (let i = 1; i < email.length; i++) {
        if (email[i] === '@')
            maskOn = false;
        if (!maskOn)
            result += email[i];
        else
            result += '*';
    }
    return result;
}
exports.default = () => {
    let str = "minder@mindera.com";
    console.log(compareStrings(str));
};
