class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hashtable = {}
        for i in s:
            hashtable[i] = hashtable[i] + 1 if i in hashtable else 1
            
        for i in t:
            if i not in hashtable: return False
            hashtable[i] -= 1
            if hashtable[i] < 0: return False
            
        if sum(hashtable.values()) == 0:
            return True
        
        return False
