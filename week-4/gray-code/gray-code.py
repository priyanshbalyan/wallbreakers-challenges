class Solution:
    def grayCode(self, n: int) -> List[int]:
        res = [0]
        for i in range(0, n):
            size = len(res)
            for j in range(size-1, -1, -1):
                res.append(res[j] | 1<<i)
            
        return res
