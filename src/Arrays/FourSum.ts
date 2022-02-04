/**
 */
const fourSum = (array:number[], targetSum: number): number[][] => {
    let result: number[][] = []
    array = array.sort((a, b) => a - b);

    for (let p1 = 0; p1 < array.length - 3; p1++) {
        for (let p2 = p1 + 1; p2 < array.length - 2; p2++) {
            let p3 = p2 + 1;
            let p4 = array.length - 1;

            while (p3 < p4) {
                let sum = array[p1] + array[p2] + array[p3] + array[p4];
                console.log(sum);
                if (sum === targetSum) {
                    result.push([array[p1], array[p2], array[p3], array[p4]]);
                    while (array[p3] === array[p3 + 1]) p3++;
                    while (array[p4] === array[p4 - 1]) p4--;
                    p3++, p4--;

                } else if (sum < targetSum) {
                    p3++;
                } else if (sum > targetSum) {
                    p4--;
                }
            }
            while (array[p2] === array[p2 + 1]) p2++;
        }
    }

    return result;
};

export default () => {
    let array = [7, 6, 4, -1, 1, 2];
    let targetSum = 16;
    
    console.log(fourSum(array, targetSum));
};
