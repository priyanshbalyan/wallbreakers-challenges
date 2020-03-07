/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const visited = new Array(grid.length).fill(null).map(item=> new Array(grid[0].length).fill(false));
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === 1) {
                const res = [0];
                dfs(i, j, visited, grid, res);
                return res[0];
            }
        }
    }
    
    return 0;
};

const dfs = (i, j, visited, grid, res) => {
    if (i<0 || j<0 || i>=grid.length || j>=grid[i].length || visited[i][j] || grid[i][j] === 0)
        return;
    
    visited[i][j] = true;
    res[0] += getSides(i, j, grid);
    
    dfs(i-1, j, visited, grid, res);
    dfs(i+1, j, visited, grid, res);
    dfs(i, j-1, visited, grid, res);
    dfs(i, j+1, visited, grid, res);
}

const getSides = (i, j, grid) => {
    let sides = 4;
    for (let [x, y] of [[i+1, j], [i-1, j], [i, j+1], [i, j-1]]) {
        if (x<0 || y<0 || x>=grid.length || y>=grid[x].length || grid[x][y] === 0) continue;
        
        if (grid[x][y] === 1) --sides;
    }
    
    return sides;
}
