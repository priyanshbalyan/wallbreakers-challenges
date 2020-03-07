class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        visited = [[False for i in j] for j in grid]
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    res = [0]
                    self.dfs(i, j, grid, visited, res)
                    return res[0]
        
        return 0
    
    def dfs(self, i, j, grid, visited, res):
        if i<0 or j<0 or i>=len(grid) or j>=len(grid[i]) or visited[i][j] or grid[i][j] != 1:
            return
        
        visited[i][j] = True
        res[0] += self.getSides(i, j, grid)
        
        self.dfs(i+1, j, grid, visited, res)
        self.dfs(i-1, j, grid, visited, res)
        self.dfs(i, j+1, grid, visited, res)
        self.dfs(i, j-1, grid, visited, res)
        
    def getSides(self, i, j, grid):
        sides = 4
        for x, y in [(i+1, j), (i-1, j), (i, j+1), (i, j-1)]:
            if x<0 or y<0 or x>=len(grid) or y>=len(grid[x]):
                continue
            if grid[x][y] == 1:
                sides -= 1
        
        return sides
