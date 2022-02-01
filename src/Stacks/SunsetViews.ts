/**
 */
import { PrintArray } from '../utils/Utilities';

enum Direction {
    East = 'EAST',
    West = 'WEST'
}
const sunsetViewsA = (buildings: number[], direction: Direction): number[] => {
    let result: number[] = [];
    let tallestHeight = 0;

    const compareHeight = (height: number, index: number) => {
        if (height > tallestHeight) {
            tallestHeight = height;
            result.push(index);
        }
    }

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
}

const sunsetViewsStack = (buildings: number[], direction: Direction): number[] => {
    let result: number[] = [];

    const compare = (index: number) => {
        console.log(index);
        let height = buildings[index];
        let prevTallest = result.length ? buildings[result[result.length - 1]] : 0;
        if (height > prevTallest) {
            result.push(index);
        }
    }

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
}

export default () => {
    let buildings = [3, 5, 4, 4, 3, 1, 3, 2];
    PrintArray(sunsetViewsStack(buildings, Direction.East));
    PrintArray(sunsetViewsStack(buildings, Direction.West));
};
