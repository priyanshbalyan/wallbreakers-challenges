class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        self.backtrack(0, 0, '', n, res)
        return res
    
    def backtrack(self, left, right, cur_string, n, res):
        if len(cur_string) == n*2:
            res.append(cur_string)
            return
        
        if left < n: self.backtrack(left + 1, right, cur_string + '(', n, res)
        if right < left: self.backtrack(left, right + 1, cur_string + ')', n, res)
