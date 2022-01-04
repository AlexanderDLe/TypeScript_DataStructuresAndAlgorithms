/**
 * Grokking the Coding Interview
 * 
Time Complexity#
The above algorithm’s time complexity will be O(N), 
where ‘N’ is the number of characters in the input array. 
The outer for loop runs for all characters, and the inner 
while loop processes each character only once; therefore, 
the time complexity of the algorithm will be O(N+N), 
which is asymptotically equivalent to O(N).

Space Complexity#
The algorithm runs in constant space O(1) as there can 
be a maximum of three types of fruits stored in the frequency map.

Similar Problems#
Problem 1: Longest Substring with at most 2 distinct characters

Given a string, find the length of the longest substring 
in it with at most two distinct characters.

Solution: This problem is exactly similar to our parent problem.
*/

const FruitsIntoBasket = (arr: string[]): number => {
    let fruits = 0;
    let uniqueFruits = 0;
    let map: any = {};
    let L = 0;

    for (let R = 0; R < arr.length; R++) {
        let Rfruit = arr[R];

        if (map[Rfruit]) map[Rfruit]++;
        else {
            uniqueFruits++;
            map[Rfruit] = 1;
        }

        while (L < R && uniqueFruits > 2) {
            let Lfruit = arr[L];

            map[Lfruit]--;
            if (!map[Lfruit]) uniqueFruits--;
            L++;
        }
        fruits = Math.max(fruits, R - L + 1)
    }

    return fruits;
}

export default () => {
    let fruits1 = ['A', 'B', 'C', 'A', 'C'];
    let fruits2 = ['A', 'B', 'C', 'B', 'B', 'C'];
    console.log(FruitsIntoBasket(fruits1));
    console.log(FruitsIntoBasket(fruits2));
};
