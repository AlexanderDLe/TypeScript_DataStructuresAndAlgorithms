/**
 * 647. Palindromic Substrings
 */
import { PrintMatrix } from '../utils/Utilities';

const countSubstringsA = (s: string): number => {
    let count = s.length;
    let matrix: number[][] = [];

    for (let i = 0; i < s.length; i++) {
        matrix.push(new Array(s.length).fill(0));
        matrix[i][i] = 1;
    }
    
    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            if (row === col - 1 || matrix[row + 1][col - 1]) {
                if (s[row] === s[col]) {
                    count++;
                    matrix[row][col] = 1;
                }
            }
        }
    }

    return count;
}

const countSubstringsMatrix = (s: string): number => {
    let count = s.length;
    let matrix: number[][] = [];

    for (let i = 0; i < s.length; i++) {
        matrix.push(new Array(s.length).fill(0))
        matrix[i][i] = 1;
    }

    for (let col = 1; col < matrix.length; col++) {
        for (let row = 0; row < col; row++) {
            if (matrix[row + 1][col - 1] === 1 || matrix[row + 1][col] === 1) {
                if (s[row] === s[col]) {
                    count++;
                    matrix[row][col] = 1;
                }
            }
        }
    }

    PrintMatrix(matrix);

    return count;
}

const countSubstrings = (s: string): number => {
    let count = 0;

    const checkPalindrome = (s: string, i: number, j: number): void => {
        while(i>=0 && j<s.length && s.charAt(i)==s.charAt(j)){    //Check for the palindrome string 
            count++;    //Increment the count if palindromin substring found
            i--;    //To trace string in left direction
            j++;    //To trace string in right direction
        }
    }

    if(s.length === 0) 
        return 0;
    for(let i = 0; i < s.length - 1; i++){
        checkPalindrome(s,i,i);     //To check the palindrome of odd length palindromic sub-string
        checkPalindrome(s,i,i+1);   //To check the palindrome of even length palindromic sub-string
    }

    return count;
}

export default (): void => {
    let str = 'aabaa';
    console.log(countSubstrings(str));
};
