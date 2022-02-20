/**
 * Pramp - Array Quadruplet
 * 
 * Gym
 * [F, T, T, F, F]
 * [1, 0, 0, 1, 2]
 * 
 * School
 * D = 2
 * [F, F, F, T, T]
 * [3, 2, 1, 1, 2]
 */

import { PrintArray } from '../utils/Utilities';

const apartmentHunting = (blocks: any, reqs: string[]): number => {
    let maxWalks = new Array(blocks.length).fill(-Infinity);

    for (let req of reqs) {
        let reqWalks = new Array(blocks.length).fill(Infinity);

        // From left
        let distance = Infinity;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i][req]) distance = -1;
            distance++;
            reqWalks[i] = Math.min(reqWalks[i], distance);
        }
        
        // From right
        distance = Infinity;
        for (let i = blocks.length - 1; i >= 0; i--) {
            if (blocks[i][req]) distance = -1;
            distance++;
            reqWalks[i] = Math.min(reqWalks[i], distance)
        }

        for (let i = 0; i < blocks.length; i++) {
            maxWalks[i] = Math.max(maxWalks[i], reqWalks[i]);
        }
        PrintArray(reqWalks)
    }
    PrintArray(maxWalks)
    let minWalk = Math.min(...maxWalks);
    return maxWalks.indexOf(minWalk);
};


export default () => {
    const arr1 = [
         {"gym": true,  "pool": false, "school": true, "store": false}
        ,{"gym": false, "pool": false, "school": false,"store": false}
        ,{"gym": false, "pool": false, "school": true, "store": false}
        ,{"gym": false, "pool": false, "school": false,"store": false}
        ,{"gym": false, "pool": false, "school": false,"store": true}
        ,{"gym": true,  "pool": false, "school": false,"store": false}
        ,{"gym": false, "pool": false, "school": false,"store": false}
        ,{"gym": false, "pool": false, "school": false,"store": false}
        ,{"gym": false, "pool": false, "school": false,"store": false}
        ,{"gym": false, "pool": false, "school": true, "store": false}
        ,{"gym": false, "pool": true,  "school": false,"store": false    }
    ]
    const reqs1 = ["gym", "pool", "school", "store"];
    const arr2 = [
        { "gym": true,  "office": false, "pool": false, "school": true,  "store": false},
        { "gym": false, "office": false, "pool": false, "school": false, "store": false},
        { "gym": false, "office": true,  "pool": false, "school": true,  "store": false},
        { "gym": false, "office": true,  "pool": false, "school": false, "store": false},
        { "gym": false, "office": false, "pool": false, "school": false, "store": true},
        { "gym": true,  "office": true,  "pool": false, "school": false, "store": false},
        { "gym": false, "office": false, "pool": true,  "school": false, "store": false},
        { "gym": false, "office": false, "pool": false, "school": false, "store": false},
        { "gym": false, "office": false, "pool": false, "school": false, "store": false},
        { "gym": false, "office": false, "pool": false, "school": true,  "store": false},
        { "gym": false, "office": false, "pool": true,  "school": false, "store": false}
    ]; 
    const reqs2 = ["gym", "pool", "school", "store"];
    console.log(apartmentHunting(arr2, reqs2));
};
