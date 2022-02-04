/**
 * 
 * ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
 * 
 * Group by word length
 * 
 * {
 *  2: "yo", "oy",
 *  3: "act", "tac", "foo", "cat",
 *  4: "flop", "olfp"
 * }
 * 
 */

const groupAnagrams = (words: string[]): string[][] => {
    let map: any = {};

    for (let word of words) {
        let sorted = word.split('').sort().join('');

        if (map[sorted]) map[sorted].push(word);
        else map[sorted] = [word];
    }

    return Object.values(map);
}

export default () => {
    const s = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
    console.log(groupAnagrams(s));
};
