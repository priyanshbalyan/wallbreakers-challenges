class Solution:
    def __init__(self):
        self.memo = {}
        
    def isMatch(self, s: str, p: str) -> bool:
        state = s + '~~' + p
        
        if state in self.memo: return memo[state]

        
        if len(p) == 0:
            self.memo[state] = len(s) == 0
        elif len(p) >=2 and p[1] == '*':
            match = len(s) != 0 and (p[0] == s[0] or p[0] == '.')
            self.memo[state] = self.isMatch(s, p[2:]) or (match and self.isMatch(s[1:], p))
        else:
            match = len(s) != 0 and (p[0] == s[0] or p[0] == '.')            
            self.memo[state] = match and self.isMatch(s[1:], p[1:])
        
        return self.memo[state]
