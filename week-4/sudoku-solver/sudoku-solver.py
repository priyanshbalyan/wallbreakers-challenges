class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        self.solveBoard(0, 0, board)
    
    def solveBoard(self, row, col, board):
        if row == len(board):
            return True
        if col == len(board):
            return self.solveBoard(row+1, 0, board)
        if board[row][col] != '.':
            return self.solveBoard(row, col+1, board)
        
        for i in range(1, 10):
            value = str(i)
            if self.validate(row, col, value, board):
                board[row][col] = value
                if self.solveBoard(row, col+1, board):
                    return True
                board[row][col] = '.'
        
        return False
    
    def validate(self, row, col, number, board):
        subRow = (row//3) * 3
        subCol = (col//3) * 3
        
        for i in range(len(board)):
            if board[row][i] == number or board[i][col] == number:
                return False
            
        for i in range(subRow, subRow+3):
            for j in range(subCol, subCol+3):
                if board[i][j] == number:
                    return False
                
        return True
