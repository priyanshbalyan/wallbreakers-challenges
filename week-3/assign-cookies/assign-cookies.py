class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        
        c_index = 0
        cookie_index = 0
        while c_index < len(g) and cookie_index < len(s):
            if s[cookie_index] >= g[c_index]:
                c_index += 1
            cookie_index += 1
        
        return c_index
