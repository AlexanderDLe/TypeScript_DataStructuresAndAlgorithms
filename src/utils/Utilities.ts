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
