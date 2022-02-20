/**
 *  AlgoExpert
 * 
 * aefoaefcdaefcdaed
 * 
 * aefcdaed
 * 
 ******************************************** 
 *     v
 * aefaefcdaefaedaed
 *         ^
 * 
 * aefaedaed
 * ^
 * 
 */

const knuthMorrisPratt = (string:string, substring:string): boolean => { 
  const buildPattern = (): number[] => {
    const array = new Array(substring.length).fill(-1);
    let j = 0;
    let i = 1;

    while (i < substring.length) {
      if (substring[i] === substring[j]) {
        array[i] = j;
        i++, j++;
      } else if (j > 0) {
        j = array[j - 1] + 1;
      } else {
        i++;
      }
    }
    return array;
  }

  const doesMatch = (pattern: number[]): boolean => {
    let i = 0;
    let j = 0;

    while (i + substring.length - j <= string.length) {
      if (string[i] === substring[j]) {
        if (j === substring.length - 1) return true;
        i++, j++;
      } else if (j > 0) {
        j = pattern[j - 1] + 1;
      } else {
        i++;
      }
    }

    return false;
  }

  const pattern = buildPattern();
  return doesMatch(pattern);
}

export default () => {
  let s = "aefoaefcdaefcdaed", t = "aefcdaed"
  console.log(knuthMorrisPratt(s, t));
};
