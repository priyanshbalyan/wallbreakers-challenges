/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Array(grid.length).fill(false).map(i => Array(grid[0].length).fill(false));
    
    let count = 0;
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === '1' && !visited[i][j]){
                dfs(i, j, grid, visited);
                count++;
            }
        }
    }
    
    return count;
};

let dfs = function (i, j, grid, visited) {
    if (i<0 || j<0 || i>grid.length-1 || j>grid[0].length-1 || grid[i][j] === '0' || visited[i][j])
        return;
    
    visited[i][j] = true;
    dfs(i+1, j, grid, visited);
    dfs(i-1, j, grid, visited);
    dfs(i, j-1, grid, visited);
    dfs(i, j+1, grid, visited);
};
