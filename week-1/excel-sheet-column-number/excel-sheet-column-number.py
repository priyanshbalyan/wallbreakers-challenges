class Solution:
    def titleToNumber(self, s: str) -> int:
        res = 0
        placeValue = len(s)-1
        for i in s:
            res += int(ord(i) - 64) * (26**placeValue)
            placeValue -= 1
        
        return res
