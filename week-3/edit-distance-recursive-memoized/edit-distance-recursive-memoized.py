class Solution:
    def __init__(self):
        self.memo = {}
        
    def minDistance(self, word1: str, word2: str) -> int:
        state = word1 + '~~' + word2
        if state in self.memo:
            return self.memo[state]
        
        elif len(word1) == 0 and len(word2) == 0:
            self.memo[state] = 0
        
        elif len(word1) == 0:
            self.memo[state] = 1 + self.minDistance(word1, word2[1:])
        
        elif len(word2) == 0:
            self.memo[state] = 1 + self.minDistance(word1[1:], word2)
            return self.memo[state]
        
        elif word1[0] == word2[0]:
            self.memo[state] = self.minDistance(word1[1:], word2[1:])
        else:
            self.memo[state] =  1 + min(self.minDistance(word1[1:], word2[1:]), self.minDistance(word1[1:], word2), self.minDistance(word1, word2[1:]))
            
        return self.memo[state]

