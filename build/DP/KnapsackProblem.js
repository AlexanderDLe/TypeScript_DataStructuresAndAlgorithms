"use strict";
/**
 *  AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
const knapsackProblem = (items, capacity) => {
    let DP = new Array(items.length).fill(0);
    DP = DP.map(item => new Array(capacity + 1).fill(0));
    for (let i = 1; i <= capacity; i++) {
        let [value, weight] = items[0];
        if (weight <= i)
            DP[0][i] = value;
    }
    for (let row = 1; row < DP.length; row++) {
        let [value, weight] = items[row];
        for (let col = 1; col < DP[0].length; col++) {
            let top = DP[row - 1][col];
            let add = col - weight >= 0 ? DP[row - 1][col - weight] + value : 0;
            DP[row][col] = Math.max(top, add);
        }
    }
    let indexes = [];
    let traveler = [DP.length - 1, DP[0].length - 1];
    while (traveler[0] >= 0 && traveler[1] > 0) {
        let [row, col] = traveler;
        if (row > 0 && DP[row][col] === DP[row - 1][col]) {
            traveler[0]--;
        }
        else {
            let currWeight = items[row][1];
            if (col - currWeight < 0)
                break;
            indexes.push(row);
            traveler[0]--;
            traveler[1] -= currWeight;
        }
        console.log(traveler);
    }
    return [DP[DP.length - 1][DP[0].length - 1], indexes];
};
exports.default = () => {
    const items = [
        [465, 100],
        [400, 85],
        [255, 55],
        [350, 45],
        [650, 130],
        [1000, 190],
        [455, 100],
        [100, 25],
        [1200, 190],
        [320, 65],
        [750, 100],
        [50, 45],
        [550, 65],
        [100, 50],
        [600, 70],
        [240, 40]
    ];
    const capacity = 200;
    console.log(knapsackProblem(items, capacity));
};
