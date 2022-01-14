"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const comparingStrsContainingBKSP = (str1, str2) => {
    let p1 = str1.length - 1;
    let p2 = str2.length - 1;
    let bkspCount1 = 0;
    let bkspCount2 = 0;
    while (p1 >= 0) {
        while (str1[p1] === '#') {
            p1--;
            bkspCount1++;
        }
        while (str2[p2] === '#') {
            p2--;
            bkspCount2++;
        }
        while (bkspCount1) {
            p1--;
            bkspCount1--;
        }
        while (bkspCount2) {
            p2--;
            bkspCount2--;
        }
        if (str1[p1] !== str2[p2])
            return false;
        p1--;
        p2--;
    }
    return p1 === p2;
};
exports.default = () => {
    let str1A = 'xy#z', str2A = 'xzz#';
    let str1B = 'xy#z', str2B = 'xyz#';
    let str1C = 'xp#', str2C = 'xyz##';
    let str1D = 'xywrrmp', str2D = 'xywrrmu#p';
    console.log(comparingStrsContainingBKSP(str1A, str2A));
    console.log(comparingStrsContainingBKSP(str1B, str2B));
    console.log(comparingStrsContainingBKSP(str1C, str2C));
    console.log(comparingStrsContainingBKSP(str1D, str2D));
};
[0, 0, 1, 1, 2];
