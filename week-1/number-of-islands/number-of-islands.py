class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visited = [[False for i in grid[0]] for j in grid]
        count = 0
        
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == '1' and not visited[i][j]:
                    self.dfs(i, j, visited, grid)
                    count += 1
        
        return count
    
    def dfs(self, i, j, visited, grid):
        dx = [1, 0, -1, 0]
        dy = [0, 1, 0, -1]
        
        visited[i][j] = True
        q = [(i,j)]
        
        while q:
            cur_x, cur_y = q.pop()
            visited[cur_x][cur_y] = True
            
            for i in range(len(dx)):
                x = cur_x + dx[i]
                y = cur_y + dy[i]
                if x>=0 and y>=0 and x<len(grid) and y<len(grid[0]):
                    if grid[x][y] == '1' and not visited[x][y]:
                        q.append((x, y))
                        visited[x][y] = True
        
