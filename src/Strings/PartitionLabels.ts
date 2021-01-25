/**
 * 763. Partition Labels
 */

const partitionLabels = (S: string): number[] => {
    let result: number[] = [];
    let map: { [key: string]: number } = {};

    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i;
    }

    let start = 0;
    let destination = -1;

    for (let i = 0; i < S.length; i++) {
        destination = Math.max(destination, map[S[i]]);
        
        if (i === destination) {
            result.push(destination - start + 1);
            start = destination + 1;
        }
    }

    return result;
};

export default () => {
    let S = "caedbdedda"
    console.log(partitionLabels(S));
};
