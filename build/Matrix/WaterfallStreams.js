"use strict";
/**
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const waterfallStreams = (array, source) => {
    const result = new Array(array[0].length).fill(0);
    const cols = array[0].length;
    const rows = array.length;
    const travel = (row, col, value) => {
        if (row === rows - 1) {
            result[col] += value;
            return;
        }
        if (array[row + 1][col] === 1) {
            let LPos = col;
            let RPos = col;
            while (LPos >= 0) {
                LPos--;
                if (array[row][LPos] === 1)
                    break;
                if (LPos >= 0 && array[row + 1][LPos] === 0) {
                    travel(row, LPos, value / 2);
                    break;
                }
            }
            while (RPos < cols) {
                RPos++;
                if (array[row][RPos] === 1)
                    break;
                if (RPos < cols && array[row + 1][RPos] === 0) {
                    travel(row, RPos, value / 2);
                    break;
                }
            }
            return;
        }
        travel(row + 1, col, value);
    };
    travel(0, source, 100);
    return result;
};
exports.default = () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    const source = 8;
    (0, Utilities_1.PrintArray)(waterfallStreams(board, source));
};
