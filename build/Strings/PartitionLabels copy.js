"use strict";
/**
 * 763. Partition Labels
 */
Object.defineProperty(exports, "__esModule", { value: true });
const partitionLabelsA = (S) => {
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
const partitionLabels = (S) => {
    let result = [];
    let map = {};
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i;
    }
    let startPartition = 0;
    let endPartition = map[S[0]];
    console.log(map);
    console.log(`start: ${startPartition}, end: ${endPartition}`);
    for (let i = 0; i < S.length; i++) {
        endPartition = Math.max(endPartition, map[S[i]]);
        // if map value of i is equal to the endPartition, then that is one partition
        if (i === endPartition) {
            result.push(endPartition - startPartition + 1);
            startPartition = i + 1;
            endPartition = map[S[i + 1]];
            console.log(`start: ${startPartition}, end: ${endPartition}`);
        }
    }
    return result;
};
exports.default = () => {
    let S = "eccbbbbdec";
    console.log(partitionLabels(S));
};
