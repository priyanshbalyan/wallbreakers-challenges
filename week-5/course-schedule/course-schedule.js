/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(null).map(item=>[]);
    const visited = new Array(numCourses).fill(false);
    
    for (let [x, y] of prerequisites){
        graph[x].push(y);
    }

    for (let i=0; i<numCourses; i++) {
        if (!dfs(i, graph, visited)) return false;
    }
    
    return true;
};

const dfs = (i, graph, visited) => {
    if (visited[i] === -1) return false;
    
    if (visited[i]) return true;
    
    visited[i] = -1;
    for (let j of graph[i]) {
        if (!dfs(j, graph, visited)) return false;
    }
    
    visited[i] = true;
    return true;
};
