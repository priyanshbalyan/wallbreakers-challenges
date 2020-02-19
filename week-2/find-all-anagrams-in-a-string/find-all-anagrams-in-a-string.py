class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if not s or len(s) == 0 or len(p) > len(s): return []
        array = [0]*26
        for i in p:
            array[ord(i) - ord('a')] += 1
            
        left = 0
        right = 0
        count = len(p)
        res = []
        
        while right < len(s):
            if array[ord(s[right]) - ord('a')] >= 1:
                count -= 1
            
            array[ord(s[right]) - ord('a')] -= 1
            right += 1
            
            if count == 0: res.append(left)
                
            if right - left == len(p):
                if array[ord(s[left]) - ord('a')] >= 0:
                    count += 1
                array[ord(s[left]) - ord('a')] += 1
                left += 1
                
        return res
