class Solution:
    def findCircleNum(self, M: List[List[int]]) -> int:
        visited = {}
        count = 0
        for i in range(len(M)):
            if i not in visited:
                self.dfs(i, visited, M)
                count += 1
                
        return count
    
    def dfs(self, row, visited, M):
        for key, val in enumerate(M[row]):
            if val == 1 and key not in visited:
                visited[key] = True
                self.dfs(key, visited, M)
