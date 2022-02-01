/**
 */

const isPalindromeA = (s: string): boolean => {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');

    console.log(s);

    let L = 0;
    let R = s.length - 1;

    while (L < R) {
        if (s[L] != s[R]) return false;
        L++, R--;
    }
    
    return true;
};

const isPalindrome = (s: string): boolean => {
    let L = 0;
    let R = s.length - 1;

    while (L < R) {
        if (s[L] !== s[R]) return false;
        L++, R--;
    }

    return true;
}

export default () => {
    const s = "racecar"

    console.log(isPalindrome(s));
};
