class Solution:
    def firstUniqChar(self, s: str) -> int:
        array = [0]*26
        for i in s:
            array[ord(i)-ord('a')] += 1
        
        for i in range(len(s)):
            if array[ord(s[i])-ord('a')] == 1:
                return i
        
        return -1
        
        
