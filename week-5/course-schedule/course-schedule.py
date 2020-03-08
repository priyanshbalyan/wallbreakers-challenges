class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        
        graph = [[] for i in range(numCourses)]
        visited = [False for i in range(numCourses)]
        
        for x, y in prerequisites:
            graph[x].append(y)
            
        for i in range(numCourses):
            if not self.dfs(i, graph, visited): #check for cycles in graph
                return False
            
        return True
    
    def dfs(self, i, graph, visited):
        if visited[i] == -1: # cycle found
            return False
        
        if visited[i]: return True # already visited node
        
        visited[i] = -1 #currently visiting node i
        
        for j in graph[i]:
            if not self.dfs(j, graph, visited):
                return False
            
        visited[i] = True # Finally mark node visited
        return True

