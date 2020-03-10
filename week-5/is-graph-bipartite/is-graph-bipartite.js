/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const colors = new Array(graph.length).fill(0);
    for (let i=0; i<graph.length; i++) {
        if (colors[i] === 0 && !dfs(i, graph, colors, 1)) return false
    }
    
    return true;
};

const dfs = (i, graph, colors, cur_color) => {
    if (colors[i] !== 0) return colors[i] === cur_color;
    
    colors[i] = cur_color;
    for (let j of graph[i]) {
        if (!dfs(j, graph, colors, -cur_color)) return false;
    }
    
    return true;
};
