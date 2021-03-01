/**
 * 1732. Find the Highest Altitude
 */

const largestAltitude = (gain: number[]): number => {
    let curr = 0;
    let highest = 0;

    for (let change of gain) {
        curr += change;
        highest = Math.max(highest, curr);
    }

    return highest;
};

export default () => {
    const arr: number[] = [-4, -3, -2, -1, 4, 3, 2];
    console.log(largestAltitude(arr));
};
