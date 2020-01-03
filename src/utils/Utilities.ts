export const PrintArray = (arr: any[]): void => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) {
            str += ' | ';
        }
    }
    console.log(str);
};

export const PrintMatrix = (matrix: any[][]): void => {
    let str = '[\n';

    for (let i = 0; i < matrix.length; i++) {
        str += '\t[ ';
        for (let j = 0; j < matrix[i].length; j++) {
            str += matrix[i][j];
            str += j < matrix[i].length - 1 ? ' | ' : '';
        }
        str += ' ]\n';
    }
    str += ']\n';
    console.log(str);
};
