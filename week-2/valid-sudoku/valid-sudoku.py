class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        hashtable = {}
        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] != '.':
                    if not self.checkValue(i, j, board, hashtable):
                        return False
                    
        return True
    
    def checkValue(self, i, j, board, hashtable):
        box_row = i//3
        box_col = j//3
        
        str_x = str(board[i][j]) + ' in row ' + str(i)
        str_y = str(board[i][j]) + 'in col ' + str(j)
        box = str(board[i][j]) + 'in box ' + str(box_row) + str(box_col)
        
        if str_x in hashtable or str_y in hashtable or box in hashtable:
            return False
        
        hashtable[str_x] = True
        hashtable[str_y] = True
        hashtable[box] = True
        
        return True
