/**
 * 763. Partition Labels
 */

const partitionLabelsA = (S: string): number[] => {
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

const partitionLabels = (S: string): number[] => {
    let result: number[] = [];
    let map: any = {};

    for(let i = 0; i < S.length; i++) {
        map[S[i]] = i;
    }
    
    let startPartition: number = 0;
    let endPartition: number = map[S[0]];
    console.log(map)
    
    console.log(`start: ${startPartition}, end: ${endPartition}`);

    for (let i = 0; i < S.length; i++) {
        endPartition = Math.max(endPartition, map[S[i]]);

        // if map value of i is equal to the endPartition, then that is one partition
        if (i === endPartition) {
            result.push(endPartition - startPartition + 1);
            startPartition = i + 1;
            endPartition = map[S[i + 1]]

            console.log(`start: ${startPartition}, end: ${endPartition}`);
        }
    }

    return result;
}

export default () => {
    let S = "eccbbbbdec"
    console.log(partitionLabels(S));
};
