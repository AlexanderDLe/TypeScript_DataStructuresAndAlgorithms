/**
 * 
 * 824. Goat Latin
 */

import { PrintObject } from "../utils/Utilities";


const goatLatin = (sentence: string): string => {
  let arr = sentence.split(' ');
  const vowels = new Set(['a', 'e', 'i', 'o' ,'u', 'A', 'E', 'I', 'O', 'U']);
  let appendA = 'a';
  
  for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      
      // word starts with vowel
      if (vowels.has(word[0])) {
          arr[i] = word + 'ma';
          
          
      // word starts with consonant
      } else {
          arr[i] = word.slice(1) + word[0] + 'ma';
      }
      
      
      // append A
      arr[i] = arr[i] + appendA;
      appendA += 'a';
  }
  
  return arr.join(' ');
}

export default () => {
  console.log(goatLatin("I speak Goat Latin"))
};
