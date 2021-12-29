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
const numTreesA = (n: number): number => {
    const DP: number[] = new Array(n + 1).fill(0);
    DP[0] = 1;
    DP[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) { 
            DP[i] += DP[j - 1] * DP[i - j];
        }
    }

    return DP[n];
}

const numTreesB = (n: number): number => {
    let dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let level = 2; level <= n; level++) {
        for (let root = 1; root <= level; root++) {
            dp[level] += dp[level - root] * dp[root - 1];
        }
    }

    return dp[n];
};

const numTrees = (n: number): number => {
    let map: {[key: number]: number} = {0:1, 1:1}

    for (let i = 2; i <= n; i++) {
        let sum = 0;

        for (let j = 1; j <= i; j++) {
            let left = j - 1;
            let right = i - j;
            
            sum += map[left] * map[right];
        }
        map[i] = sum;
    }

    return map[n];
}

export default () => {
    console.log(numTrees(5));
};
