class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        
        return self.createMapping(s) == self.createMapping(t)
        
    def createMapping(self, string):
        mapping = ''
        counter = 0
        hashtable = {}
        for i in string:
            if i not in hashtable:
                hashtable[i] = counter
                counter += 1
            mapping += str(hashtable[i])
            
        return mapping
