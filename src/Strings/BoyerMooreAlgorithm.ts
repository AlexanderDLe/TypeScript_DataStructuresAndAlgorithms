/**
 *  AlgoExpert
*/

import { PrintArray } from "../utils/Utilities";

const boyerMooreRef = (text:string, pattern:string): boolean => { 
  const buildBadcharMap = () => {
    let map: any = {};
    for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];
      map[char] = i;
    }
    return map;
  }

  const search = () => {
    let badcharMap = buildBadcharMap();
    let patternLen = pattern.length;
    let textLen = text.length;
    let shifts = 0;

    console.log(badcharMap);
    while (shifts <= (textLen - patternLen)) {
      {
        console.log(`------------------------------------------------`)
        console.log(`Shifts: ${shifts}`)
        console.log(`Starting index: ${shifts + patternLen - 1}`)
      }
      let i = patternLen - 1;

      while (i >= 0 && pattern[i] === text[shifts + i]) {
        i--;
      }
      {
        console.log(`Text:    ${text}`)
        console.log(`Pattern: ${' '.repeat(shifts)}${pattern}\n`)
      }
      if (i < 0) return true;
      else {
        let badChar = text[shifts + i];
        let lastBadCharOccurence = badcharMap[badChar] || -1;
        let shiftBy = Math.max(1, i - lastBadCharOccurence);
        shifts += shiftBy;
        
        {
          console.log(`Badchar: ${badChar}`)
          console.log(`Badchar last occurence: ${lastBadCharOccurence}`)
          console.log(`Pattern ending index: ${i}`)
          console.log(`Shifted by: ${shiftBy}`)
        }
      }
    }
    return false;
  }
  return search();
}

const boyerMoore = (text:string, pattern:string): boolean => { 
  const buildLastOccurenceMap = () => {
    let map: any = {};
    for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];
      map[char] = i;
    }
    return map;
  }

  const search = ():boolean => {
    const lastOccurMap = buildLastOccurenceMap();
    const textLen = text.length;
    const pattLen = pattern.length;
    let shifts = 0;

    while (shifts <= (textLen - pattLen)) {
      let i = pattLen - 1;

      while (i >= 0 && text[shifts + i] === pattern[i]) {
        i--;
      }

      if (i < 0) return true;
      let badchar = text[shifts + i];
      let badcharLastOccur = lastOccurMap[badchar] || -1;
      shifts += Math.max(1, i - badcharLastOccur);
    }

    return false;
  }

  return search();
}

export default () => {
  let s = "GCAXTGCCTATGTGACC", t = "TATGTG"
  console.log(boyerMoore(s, t));
};
