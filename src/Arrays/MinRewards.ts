/**
 
 [0, 4, 2, 1, 3]
 
 [1, 1, 1, 1, 1]
  
 [index: value]
 
 [0, 0]
 [1, 4]
 [2, 2]
 [3, 1]
 [4, 3]

 Sort by value

 [0, 0]
 [3, 1]
 [2, 2]
 [4, 3]
 [1, 4]
 
 1. [0, 0];
 
    [0, 4, 2, 1, 3]
    [1, 1, 1, 1, 1]

 2. [3, 1];
 
    [0, 4, 2, 1, 3]
    [1, 1, 1, 1, 1]

 3. [2, 2];
 
    [0, 4, 2, 1, 3]
    [1, 1, 2, 1, 1]

 4. [4, 3];
 
    [0, 4, 2, 1, 3]
    [1, 1, 2, 1, 2]

 5. [1, 4];
 
    [0, 4, 2, 1, 3]
    [1, 3, 2, 1, 2]

Bonus
 
    [1, 2, 2, 4, 2, 1, 3]
    [1, 2, 1, 1, 1, 1, 1]

 */

import { PrintArray, PrintObject } from "../utils/Utilities";

const minRewardsMyAttempt = (array: number[]): number => {
    let indexToVal: [number, number][] = [];

    for (let i = 0; i < array.length; i++) {
        indexToVal.push([i, array[i]]);
    }

    let rewards = new Array(array.length).fill(1);
    indexToVal = indexToVal.sort((a, b) => a[1] - b[1]);

    for (let pair of indexToVal) {
        let [index, val] = pair;

        let LVal = array[index - 1] || Infinity;
        let RVal = array[index + 1] || Infinity;
        let reward = 1;
        
        if (val > LVal) reward = Math.max(reward, rewards[index - 1] + 1);
        if (val > RVal) reward = Math.max(reward, rewards[index + 1] + 1);
        
        rewards[index] = reward;
    }
    
    return rewards.reduce((acc, curr) => acc + curr);
}

const minRewards = (array: number[]): number => {
    let rewards = array.map(() => 1);

    for (let i = 1; i < array.length; i++) {
        let curr = array[i];
        let prev = array[i - 1];
        if (curr > prev) rewards[i] = rewards[i - 1] + 1;
    }

    for (let i = array.length - 2; i >= 0; i--) {
        let curr = array[i];
        let prev = array[i + 1];
        if (curr > prev) rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }

    return rewards.reduce((acc, curr) => acc + curr);
}
export default () => {
    const array = [0, 4, 2, 1, 3];
    console.log(minRewards(array));
};
