class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        if not pattern or not str: return False
        return self.createMapping(pattern) == self.createMapping(str.split(' '))
    
    def createMapping(self, string):
        count = 0
        mapping = ''
        hashtable = {}
        for i in string:
            if i not in hashtable:
                hashtable[i] = str(count)
                count += 1
            mapping += hashtable[i]
            
        return mapping
