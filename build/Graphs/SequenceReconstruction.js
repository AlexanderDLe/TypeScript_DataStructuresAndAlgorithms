"use strict";
/**
 * 444. Sequence Reconstruction
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sequenceReconstructionRef = (org, seqs) => {
    const pairs = {};
    const indexes = {};
    // Map the indexes of each value in org
    for (let i = 0; i < org.length; i++) {
        let val = org[i];
        indexes[val] = i;
    }
    for (let j = 0; j < seqs.length; j++) {
        const s = seqs[j];
        for (let i = 0; i < s.length; i++) {
            let prev = s[i - 1] || 'X';
            let curr = s[i];
            // console.log(`s: ${s} | prev: ${prev || '-'} | curr: ${curr} | indexes[curr]: ${indexes[curr]} | pair: ${`${prev}_${curr}`}`);
            // If value doesn't exist in org, we can return false.
            // Can't use (!indexes[curr]) because index[curr] = 0 is a legit value.
            if (indexes[curr] === null)
                return false;
            // Look at the ordering of the current and previous values of the subsequence.
            // If the prev value doesn't come previous to the curr value in ORG, then the order is wrong.
            // prev must be consistent in the subsequence and org.
            if (i > 0 && indexes[prev] >= indexes[curr])
                return false;
            // If the ordering is consistent, we can encode this pairing in the pair object.
            pairs[`${prev}_${curr}`] = 1;
        }
    }
    // PrintObject(pairs);
    // Loop through org - determine if the order/pairing exists within the subsequences
    for (let i = 0; i < org.length; i++) {
        if (!pairs[`${org[i - 1]}_${org[i]}`])
            return false;
    }
    return true;
};
const sequenceReconstruction = (nums, sequences) => {
    const indexes = {};
    const pairs = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        indexes[num] = i;
    }
    for (let seq of sequences) {
        for (let i = 0; i < seq.length; i++) {
            if (indexes[seq[i]] == null)
                return false;
            if (i > 0 && indexes[seq[i - 1]] >= indexes[seq[i]])
                return false;
            pairs[`${seq[i - 1]}_${seq[i]}`] = 1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        let prev = nums[i - 1];
        let curr = nums[i];
        let encode = `${prev}_${curr}`;
        if (!pairs[encode])
            return false;
    }
    return true;
};
exports.default = () => {
    // console.log(sequenceReconstructionRef2([1,2,3], [[1,2],[1,3]]));
    console.log(sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3]]));
    console.log(sequenceReconstruction([1, 2, 3], [[1, 2]]));
    console.log(sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3], [2, 3]]));
    console.log(sequenceReconstruction([4, 1, 5, 2, 6, 3], [[5, 2, 6, 3], [4, 1, 5, 2]]));
    // console.log(sequenceReconstructionRef2([4,1,5,2,6,3], [[5,2,6,3],[4,1,5,2]]));
};
