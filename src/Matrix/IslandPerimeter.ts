/**
 * 463. Island Perimeters

    0 1 0 0
    1 1 1 0
    0 1 0 0
    1 1 0 0 
    
1. Perimeter can be found going from left to right and from top to bottom.
2. We can itereate from one end, and when we encounter a landmass, we can increment a counter.
3. If encounter the ocean before encountering a land mass, we can continue to increment the counters.
 */

import { PrintMatrix } from '../utils/Utilities';

const numIslands = (grid: number[][]): number => {
  const rows = grid.length;
    const cols = grid[0].length;
    
    let leftToRights = 0;
    let topToBottoms = 0;

    
    // Going from left to right, row by row
    for (let row = 0; row < rows; row++) {
        let ocean = true;
        
        for (let col = 0; col < cols; col++) {
            let cell = grid[row][col];
            
            if (cell === 1 && ocean) {
                leftToRights++;
                ocean = false;
            }
            if (cell === 0) {
                ocean = true;
            }
        }
    }
    
    // Going from top to bottom, col by col
    for (let col = 0; col < cols; col++) {
        let ocean = true;
        
        for (let row = 0; row < rows; row++) {
            let cell = grid[row][col];
            
            if (cell === 1 && ocean) {
                leftToRights++;
                ocean = false;
            }
            if (cell === 0) {
                ocean = true;
            }
        }
    }
    
    return (leftToRights * 2) + (topToBottoms * 2);
}

export default () => {
    const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
    console.log(numIslands(grid));
};
