class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        count = 0
        dp = [[0 for i in j] for j in matrix] 
        
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                count = max(count, self.dfs(i, j, float('-inf'), matrix, dp))
        return count
    
    def dfs(self, i, j, val, matrix, dp):
        if i<0 or j<0 or i>=len(matrix) or j>=len(matrix[i]) or matrix[i][j] == 'X' or matrix[i][j] <= val:
            return 0
        
        if dp[i][j] != 0:
            return dp[i][j]
        
        temp = matrix[i][j]
        matrix[i][j] = 'X'
        
        dp[i][j] = 1 + max(self.dfs(i+1, j, temp, matrix, dp), self.dfs(i-1, j, temp, matrix, dp), self.dfs(i, j+1, temp, matrix, dp), self.dfs(i, j-1, temp, matrix, dp))
        
        matrix[i][j] = temp
        
        return dp[i][j]
