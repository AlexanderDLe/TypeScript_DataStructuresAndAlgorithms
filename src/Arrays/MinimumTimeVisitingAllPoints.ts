/**
 * 1266. Minimum Time Visiting All Points
 */

import PopulatingNextRightPointersInEachNode from '../Trees/PopulatingNextRightPointersInEachNode';
import { PrintMatrix } from '../utils/Utilities';

const minTimeToVisitAllPoints = (points: number[][]): number => {
    let result = 0;

    const getMinSeconds = (curr: number[], next: number[]): number => {
        let distanceX = Math.abs(curr[0] - next[0]);
        let distanceY = Math.abs(curr[1] - next[1]);
        let diagonals = Math.min(distanceX, distanceY);
        let straights = Math.abs(distanceX - distanceY);

        return diagonals + straights;
    };

    for (let i = 0; i < points.length - 1; i++) {
        let curr = points[i];
        let next = points[i + 1];

        // Find min seconds to travel from curr to next.
        result += getMinSeconds(curr, next);
    }

    return result;
};

export default () => {
    const points = [
        [1, 1],
        [3, 4],
        [-1, 0],
    ];
    PrintMatrix(points);
    console.log(minTimeToVisitAllPoints(points));
};
