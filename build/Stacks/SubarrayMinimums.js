"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 */
const Utilities_1 = require("../utils/Utilities");
var Direction;
(function (Direction) {
    Direction["East"] = "EAST";
    Direction["West"] = "WEST";
})(Direction || (Direction = {}));
const sunsetViewsA = (buildings, direction) => {
    let result = [];
    let tallestHeight = 0;
    const compareHeight = (height, index) => {
        if (height > tallestHeight) {
            tallestHeight = height;
            result.push(index);
        }
    };
    if (direction === Direction.East) {
        for (let i = buildings.length - 1; i >= 0; i--) {
            compareHeight(buildings[i], i);
        }
    }
    if (direction === Direction.West) {
        for (let i = 0; i < buildings.length; i++) {
            compareHeight(buildings[i], i);
        }
    }
    return result.sort((a, b) => a - b);
};
const sunsetViewsStack = (buildings, direction) => {
    let result = [];
    const compare = (index) => {
        console.log(index);
        let height = buildings[index];
        let prevTallest = result.length ? buildings[result[result.length - 1]] : 0;
        if (height > prevTallest) {
            result.push(index);
        }
    };
    if (direction === Direction.East) {
        for (let i = buildings.length - 1; i >= 0; i--) {
            compare(i);
        }
    }
    if (direction === Direction.West) {
        for (let i = 0; i < buildings.length; i++) {
            compare(i);
        }
    }
    return result.sort((a, b) => a - b);
};
exports.default = () => {
    let buildings = [3, 5, 4, 4, 3, 1, 3, 2];
    (0, Utilities_1.PrintArray)(sunsetViewsStack(buildings, Direction.East));
    (0, Utilities_1.PrintArray)(sunsetViewsStack(buildings, Direction.West));
};
