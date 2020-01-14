/**
 * 406. Queue Reconstruction By Height
 */
import { PrintMatrix, PrintArray } from '../utils/Utilities';

const reconstructPeople = (people: number[][]): number[][] => {
    let result: number[][] = [];

    people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
    people.forEach(person => {
        result.splice(person[1], 0, person);
    });

    return result;
};

export default () => {
    const people = [
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2]
    ];
    PrintMatrix(reconstructPeople(people));
};
