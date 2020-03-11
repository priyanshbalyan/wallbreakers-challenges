/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const dp = new Array(matrix.length).fill(null).map(i=>new Array(matrix[0].length).fill(0));
    let count = 0;
    
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            count = Math.max(count, dfs(i, j, -Infinity, matrix, dp));
        }
    }
    
    return count;
};

const dfs = (i, j, val, matrix, dp) => {
    if (i<0 || j<0 || i>=matrix.length || j>=matrix[i].length || matrix[i][j] === 'X' || matrix[i][j] <= val) return 0;
    
    if (dp[i][j] !== 0) return dp[i][j];
    
    const temp = matrix[i][j];
    matrix[i][j] = 'X';
    
    dp[i][j] = 1 + Math.max(
                    dfs(i+1, j, temp, matrix, dp),
                    dfs(i-1, j, temp, matrix, dp),
                    dfs(i, j+1, temp, matrix, dp),
                    dfs(i, j-1, temp, matrix, dp)
                   );
    
    matrix[i][j] = temp;
    return dp[i][j];
};
