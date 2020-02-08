/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let count = 0;
    let visited = {};
    for (let i=0; i<M.length; i++) {
        if (!visited.hasOwnProperty(i)) {
            dfs(i, visited, M);
            ++count;
        }
    }
    
    return count;
};

const dfs = function (row, visited, M) {
    for (let i=0; i<M[row].length; i++) {
        if (M[row][i] === 1 && !visited[i]) {
            visited[i] = true;
            dfs(i, visited, M);
        }
    }
}
