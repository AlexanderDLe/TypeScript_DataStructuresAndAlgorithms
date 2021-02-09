/**
 *  454. 4Sum II
 */
const fourSumCount = (A: number[], B: number[],C: number[],D: number[]): number => {
    let count = 0;
    let map: { [key: number]: number } = {};

    for (let n1 of A) {
        for (let n2 of B) {
            map[n1 + n2] = (map[n1 + n2] | 0) + 1;
        }
    }
    for (let n1 of C) {
        for (let n2 of D) {
            count += map[-(n1 + n2)] | 0;
        }
    }

    return count;
};


export default () => {
    let A = [-1,-1]
    let B = [-1,1]
    let C = [-1,1]
    let D = [1,-1]
    
    console.log(fourSumCount(A, B, C, D));
};
