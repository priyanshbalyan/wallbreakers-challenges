class Solution:
    def findComplement(self, num: int) -> int:
        res = 0
        power = 1
        while num:
            res += ((num&1)^1) * power
            power <<= 1
            num >>= 1
        return res
            
