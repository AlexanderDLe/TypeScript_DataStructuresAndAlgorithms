"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 96. Unique Binary Trees
 */
/*  Visual Representation
    
    n = 0;     null
    
    count[0] = 1
    
    
    n = 1;      1
    
    count[1] = 1
    
    
    n = 2;    1__       			 __2
                  \					/
                 count[1]	   	count[1]
    
    count[2] = 1 + 1 = 2
    
    
    
    n = 3;    1__				      __2__	                   __3
                  \		            /       \			      /
              count[2]		  count[1]    count[1]		count[2]
    
    count[3] = 2 + 1 + 2  = 5
    
    
    
    n = 4;    1__  					__2__					   ___3___
                  \				 /        \					  /		  \
              count[3]		 count[1]    count[2]		  count[2]   count[1]
    
                 __4
               /
           count[3]
    
    count[4] = 5 + 2 + 2 + 5 = 14
    

And  so on...
*/
const numTrees = (n) => {
    let DP = new Array(n + 1).fill(0);
    DP[0] = 1;
    DP[1] = 1;
    for (let level = 2; level <= n; level++) {
        for (let root = 1; root <= level; root++) {
            DP[level] += DP[level - root] * DP[root - 1];
            console.log(`Level: ${level} | Root: ${root}`);
            console.log(DP);
            console.log('');
        }
    }
    return DP[n];
};
const numTreesB = (n) => {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let level = 2; level <= n; level++) {
        for (let root = 1; root <= level; root++) {
            dp[level] += dp[level - root] * dp[root - 1];
        }
    }
    return dp[n];
};
exports.default = () => {
    console.log(numTrees(5));
};
