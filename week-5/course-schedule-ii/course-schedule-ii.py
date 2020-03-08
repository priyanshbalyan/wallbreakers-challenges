class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = [[] for i in range(numCourses)]
        visited = [False for i in range(numCourses)]
        
        for x, y in prerequisites:
            graph[x].append(y)
            
        res = []
        for i in range(numCourses):
            if not self.dfs(i, graph, visited, res):
                return []
            
        return res
    
    def dfs(self, i, graph, visited, res):
        if visited[i] == -1:
            return False
        
        if visited[i]: return True
        
        visited[i] = -1
        
        for j in graph[i]:
            if not self.dfs(j, graph, visited, res):
                return False
        
        visited[i] = True
        res.append(i)
        
        return True
