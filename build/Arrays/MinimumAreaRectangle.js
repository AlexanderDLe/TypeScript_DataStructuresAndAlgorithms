"use strict";
/**
 AlgoExpert
*/
Object.defineProperty(exports, "__esModule", { value: true });
const minimumAreaRectangleRef = (points) => {
    const initializeColumns = () => {
        const map = {};
        for (let point of points) {
            let [x, y] = point;
            if (!map[x])
                map[x] = [];
            map[x].push(y);
        }
        return map;
    };
    const columns = initializeColumns();
    const sortedColumns = Object.keys(columns)
        .map(col => parseInt(col))
        .sort((a, b) => a - b);
    let minArea = Infinity;
    let edgesParallelToYAxis = {};
    for (let x of sortedColumns) {
        let yValuesInColumn = columns[x].sort((a, b) => a - b);
        for (let curr = 1; curr < yValuesInColumn.length; curr++) {
            let y2 = yValuesInColumn[curr];
            for (let prev = 0; prev < curr; prev++) {
                let y1 = yValuesInColumn[prev];
                let pointString = `${y1.toString()}:${y2.toString()}`;
                if (pointString in edgesParallelToYAxis) {
                    const currArea = (x - edgesParallelToYAxis[pointString]) * (y2 - y1);
                    minArea = Math.min(minArea, currArea);
                }
                edgesParallelToYAxis[pointString] = x;
            }
        }
    }
    return minArea !== Infinity ? minArea : 0;
};
const minimumAreaRectangle = (points) => {
    const buildColumnMap = () => {
        let map = {};
        for (let point of points) {
            let [x, y] = point;
            if (!map[x])
                map[x] = [];
            map[x].push(y);
        }
        return map;
    };
    let columnMap = buildColumnMap();
    let sortedColumns = Object.keys(columnMap)
        .map(x => Number(x))
        .sort((a, b) => a - b);
    let minArea = Infinity;
    let edgesFound = {};
    for (let x of sortedColumns) {
        let yCoords = columnMap[x].sort((a, b) => a - b);
        for (let curr = 1; curr < yCoords.length; curr++) {
            let y1 = yCoords[curr];
            for (let prev = 0; prev < curr; prev++) {
                let y2 = yCoords[prev];
                let pointString = `${y1.toString()}:${y2.toString()}`;
                if (!edgesFound[pointString]) {
                    edgesFound[pointString] = x;
                }
                else {
                    let currArea = (y1 - y2) * (x - edgesFound[pointString]);
                    minArea = Math.min(minArea, currArea);
                }
            }
        }
    }
    return minArea !== Infinity ? minArea : 0;
};
exports.default = () => {
    const points = [
        [1, 5],
        [5, 1],
        [4, 2],
        [2, 4],
        [2, 2],
        [1, 2],
        [4, 5],
        [2, 5],
        [-1, -2]
    ];
    console.log(minimumAreaRectangle(points));
};
