class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        res = []
        if not s or not p or len(p) > len(s): return res
        p = sorted(p)
        
        for i in range(len(s) - len(p) + 1):
            if sorted(s[i:i + len(p)]) == p:
                res.append(i)
                
        return res
