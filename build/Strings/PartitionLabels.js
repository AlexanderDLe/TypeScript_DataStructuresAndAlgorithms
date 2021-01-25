"use strict";
/**
 * 763. Partition Labels
 */
Object.defineProperty(exports, "__esModule", { value: true });
const partitionLabels = (S) => {
    let result = [];
    let map = {};
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i;
    }
    let start = 0;
    let destination = -1;
    for (let i = 0; i < S.length; i++) {
        destination = Math.max(destination, map[S[i]]);
        if (i === destination) {
            result.push(destination - start + 1);
            start = destination + 1;
        }
    }
    return result;
};
exports.default = () => {
    let S = "caedbdedda";
    console.log(partitionLabels(S));
};
