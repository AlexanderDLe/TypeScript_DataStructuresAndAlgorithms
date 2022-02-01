/**
 */


const caesarCipherEncryptor = (string: string, key: number): string => {
    key %= 26;

    const shift = (char: string): string => {
        let ascii = char.charCodeAt(0) + key;

        if (ascii >= 123) ascii -= 26;

        return String.fromCharCode(ascii);
    }
    
    let result = '';
    for (let char of string) {
        result += shift(char);
    }
    
    return result;
}

export default () => {
    const s = "xyz"
    console.log(caesarCipherEncryptor(s, 2));
};
