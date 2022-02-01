/**
 *                      0
 *                      your-algodream-expertjob
 *                                      0
 *            algoexpert                your-dream-job
 * 
 *                                                5
 *                 X                         your-algodream-expertjob
 *                                 0                              5
 *                                 algoexpert                your-dream-job
 * 
 *                                                                   v
 *                 X                         your-algodream-expertjob
 *                                           4                             v
 *                                 algoexpert                your-dream-job
 * 
 *                                          
*/

import { PrintArray } from '../utils/Utilities';


const interweavingStringsWrongButScans = (one: string, two: string, three: string):boolean => {
    const scan = (p: number, q: number, str: string): number[] => {
        p++, q++;

        while (p < str.length && q < three.length) {
            if (str[p] === three[q]) {
                p++, q++;
            } else {
                break;
            }
        }
        return [p, q];
    }

    const recurse = (i1: number, i2: number, i3: number): boolean => {
        console.log(`i1: ${i1} | i2: ${i2} | i3: ${i3}`)
        if (i3 === three.length) { 
            if (i1 === one.length && i2 === two.length) return true;
            else return false;
        }
        let res1 = false;
        let res2 = false; 

        if (i1 < one.length && one[i1] === three[i3]) {
            let [p1, p3] = scan(i1, i3, one);
            res1 = recurse(i1 + 1, i2, i3 + 1);
        }
        
        if (i2 < two.length && two[i2] === three[i3]) {
            let [p2, p3] = scan(i2, i3, two);
            res2 = recurse(i1, i2 + 1, i3 + 1);
        }

        return res1 || res2;
    }

    return recurse(0, 0, 0);
}
const interweavingStrings = (one: string, two: string, three: string):boolean => {
    const recurse = (i1: number, i2: number, i3: number): boolean => {
        if (i1 + i2 === three.length) return true;
        
        let res1 = false;
        let res2 = false; 

        if (i1 < one.length && one[i1] === three[i3]) {
            res1 = recurse(i1 + 1, i2, i3 + 1);
        }
        
        if (i2 < two.length && two[i2] === three[i3]) {
            res2 = recurse(i1, i2 + 1, i3 + 1);
        }

        return res1 || res2;
    }

    return recurse(0, 0, 0);
}

export default () => {
    let one = 'aacaaaa';
    let two = 'aaabaaa';
    let three = 'aaaabacaaaaaaa';

    console.log(interweavingStrings(one, two, three));
};
