/**
 *  118. Pascal's Triangle
 */

const generate = (numRows: number): number[][] => {
    if (numRows == 0) return [];
    if (numRows == 1) return [[1]];
    
    let result: number[][] = [[1], [1, 1]];

    for (let i = 2; i < numRows; i++) {
        let subArr: number[] = [1];
        let prevArr = result[i - 1];

        for (let j = 0; j < prevArr.length - 1; j++) {
            subArr.push(prevArr[j] + prevArr[j + 1]);
        }

        subArr.push(1);
        result.push(subArr);
    }

    return result;
}
 
const generateOld = (numRows: number): number[][] => {
    if (!numRows) return [];
    if (numRows === 1) return [[1]];

    let result: number[][] = [[1], [1, 1]];
    if (numRows === 2) return result;

    // start at i = 2 due to 0 index
    for (let i = 2; i < numRows; i++) {
        let arr = [1];
        for (let j = 1; j < i; j++) {
            let sum = result[i - 1][j - 1] + result[i - 1][j];
            arr.push(sum);
        }
        arr.push(1);
        result.push(arr);
    }

    return result;
};

export default () => {
    console.log(generate(5));
};
