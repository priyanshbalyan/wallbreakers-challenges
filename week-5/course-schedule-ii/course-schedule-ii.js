/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(null).map(i=>[]);
    const visited = new Array(numCourses).fill(false);
    
    for (let [x, y] of prerequisites) {
        graph[x].push(y);
    }
    
    const res = [];
    
    for (let i=0; i<numCourses; i++) {
        if (!dfs(i, graph, visited, res)) return [];
    }
    
    return res;
};

const dfs = (i, graph, visited, res) => {
    if (visited[i] === -1) return false;
    if (visited[i]) return true;
    
    visited[i] = -1;
    for (let j of graph[i]) {
        if (!dfs(j, graph, visited, res)) return false;
    }
    
    res.push(i);
    visited[i] = true;
    return true;
}
