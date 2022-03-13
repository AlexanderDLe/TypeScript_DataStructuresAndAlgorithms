"use strict";
/**
 AlgoExpert


 
*/
Object.defineProperty(exports, "__esModule", { value: true });
const lineThroughPoints = (points) => {
    const createHashTableKey = (rise, run) => {
        return rise.toString() + ':' + run.toString();
    };
    const getGreatestCommonDenominator = (num1, num2) => {
        let a = num1;
        let b = num2;
        while (true) {
            if (a === 0)
                return b;
            if (b === 0)
                return a;
            const tempA = a;
            a = b;
            b = tempA % b;
        }
    };
    const getSlopeOfLineBetweenPoints = (p1, p2) => {
        const [p1x, p1y] = p1;
        const [p2x, p2y] = p2;
        let slope = [1, 0];
        if (p1x !== p2x) {
            let xDiff = p1x - p2x;
            let yDiff = p1y - p2y;
            let gcd = getGreatestCommonDenominator(Math.abs(xDiff), Math.abs(yDiff));
            xDiff = Math.floor(xDiff / gcd);
            yDiff = Math.floor(yDiff / gcd);
            if (xDiff < 0) {
                xDiff *= -1;
                yDiff *= -1;
            }
            slope = [yDiff, xDiff];
        }
        return slope;
    };
    let maxPoints = 1;
    for (let i1 = 0; i1 < points.length; i1++) {
        let p1 = points[i1];
        let slopes = {};
        for (let i2 = i1 + 1; i2 < points.length; i2++) {
            let p2 = points[i2];
            let [rise, run] = getSlopeOfLineBetweenPoints(p1, p2);
            let slopeKey = createHashTableKey(rise, run);
            if (!(slopeKey in slopes))
                slopes[slopeKey] = 1;
            slopes[slopeKey]++;
        }
        const currMaxPoints = Object.values(slopes).reduce((a, b) => Math.max(a, b), 0);
        maxPoints = Math.max(maxPoints, Number(currMaxPoints));
    }
    return maxPoints;
};
exports.default = () => {
    const points = [
        [1, 1],
        [2, 2],
        [3, 3],
        [0, 4],
        [-2, 6],
        [4, 0],
        [2, 1]
    ];
    console.log(lineThroughPoints(points));
};
