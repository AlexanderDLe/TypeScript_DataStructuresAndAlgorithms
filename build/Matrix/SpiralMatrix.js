"use strict";
/**
 * 73. Set Matrix Zeroes
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const spiralMatrix = (matrix) => {
};
exports.default = () => {
    const m = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];
    (0, Utilities_1.PrintMatrix)(m);
    spiralMatrix(m);
    (0, Utilities_1.PrintMatrix)(m);
};
