class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
        hashtable = {}
        for i in J:
            hashtable[i] = hashtable[i] + 1 if i in hashtable else 1
        
        res = 0
        for i in S:
            if i in hashtable:
                res += 1
        
        return res
