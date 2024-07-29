/**
 * @param {number[][]} grid
 * @return {number[]}
 */
let findMissingAndRepeatedValues = function(grid) {
        const n = grid.length;
    const allNums = new Set();
    const seen = new Set();
    let duplicate;
    
    for (let i = 1; i <= n * n; i++) {
        allNums.add(i);
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const num = grid[i][j];
            if (seen.has(num)) {
                duplicate = num; 
            } else {
                seen.add(num);
            }
        }
    }
    
    for (let num of allNums) {
        if (!seen.has(num)) {
            return [duplicate, num];
        }
    }
};