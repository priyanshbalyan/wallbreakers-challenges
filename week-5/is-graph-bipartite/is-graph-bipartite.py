class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        colors = [0 for i in graph]
        for i in range(len(graph)):
            if colors[i] == 0 and not self.dfs(i, graph, colors, 1):
                return False
            
        return True
    
    def dfs(self, i, graph, colors, cur_color):
        if colors[i] != 0:
            return cur_color == colors[i]
        
        colors[i] = cur_color
        for j in graph[i]:
            if not self.dfs(j, graph, colors, -cur_color):
                return False
            
        return True
        
