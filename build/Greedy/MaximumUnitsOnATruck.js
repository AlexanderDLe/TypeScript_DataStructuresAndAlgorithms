"use strict";
/**
 * 1710. Maximum Units on a Truck
*/
Object.defineProperty(exports, "__esModule", { value: true });
const maxUnits = (boxTypes, truckSize) => {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0;
    while (boxTypes.length && truckSize) {
        let [boxes, unitsPerBox] = boxTypes.shift();
        let boxesUsed = boxes > truckSize ? truckSize : boxes;
        totalUnits += (boxesUsed * unitsPerBox);
        truckSize -= boxesUsed;
    }
    return totalUnits;
};
exports.default = () => {
    console.log(maxUnits([[1, 3], [2, 2], [3, 1]], 4));
    // console.log(maxUnits([[5,10],[2,5],[4,7],[3,9]], 10))
};
