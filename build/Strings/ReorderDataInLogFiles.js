"use strict";
/**
 *  937. Reorder Data in Log Files
 */
Object.defineProperty(exports, "__esModule", { value: true });
const reorderLogFiles = (logs) => {
    const getBody = (s) => s.slice(s.indexOf(' ') + 1);
    const letLogs = [];
    const digLogs = [];
    for (let log of logs) {
        let item = log.split(' ')[1];
        if (isNaN(Number(item)))
            letLogs.push(log);
        else
            digLogs.push(log);
    }
    letLogs.sort((a, b) => {
        let diff = getBody(a).localeCompare(getBody(b));
        if (diff)
            return diff;
        return a.localeCompare(b);
    });
    return [...letLogs, ...digLogs];
};
exports.default = () => {
    console.log(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]));
    console.log(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]));
};
