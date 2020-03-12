/**
 *  977. Squares Of A Sorted Array
 */

const sortedSquares = (A: number[]): number[] => {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i] * A[i];
    }
    A.sort((a, b) => a - b);
    return A;
};

export default () => {
    const A = [-4, -1, 0, 3, 10];
    console.log(sortedSquares(A));
};
