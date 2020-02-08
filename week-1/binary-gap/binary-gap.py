class Solution:
    def binaryGap(self, N: int) -> int:
        res = 0
        pos = None
        for i in range(0, 32):
            if (N >> i) & 1:
                if pos is not None:
                    res = max(res, i-pos)
                pos = i
                    
        return res
