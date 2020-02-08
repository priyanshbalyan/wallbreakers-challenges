class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        visited = [[False for j in i] for i in board]
        for i in range(0, len(board)):
            for j in range(0, len(board[i])):
                if board[i][j] == 'O' and (i == 0 or i == len(board)-1 or j == 0 or j == len(board[i])-1):
                    self.update(i, j, board, visited, '1')
        
        visited = [[False for j in i] for i in board]
        for i in range(1, len(board)-1):
            for j in range(1, len(board[i])-1):
                if board[i][j] == 'O':
                    self.update(i, j, board, visited, 'X')
        
        for i in range(0, len(board)):
            for j in range(0, len(board[i])):
                if board[i][j] == '1':
                    board[i][j] = 'O'
        
        
    def update(self, row, col, board, visited, character):
        if row<0 or col<0 or row>=len(board) or col>=len(board[0]) or visited[row][col] or board[row][col] == 'X':
            return
        
        visited[row][col] = True
        board[row][col] = character
        self.update(row+1, col, board, visited, character)
        self.update(row-1, col, board, visited, character)
        self.update(row, col+1, board, visited, character)
        self.update(row, col-1, board, visited, character)
