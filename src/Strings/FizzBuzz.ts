/**
 *  412. Fizz Buzz
 */

const fizzBuzz = (n: number): string[] => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result.push('FizzBuzz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

export default () => {
    console.log(fizzBuzz(15));
};
