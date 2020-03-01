class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res = []
        self.recurse([], 1, n, k, res)
        return res
    
    def recurse(self, cur_array, index, n, k, res):
        if k == 0:
            res.append(cur_array[:])
            return
        
        for i in range(index, n+1):
            cur_array.append(i)
            self.recurse(cur_array, i+1, n, k-1, res)
            cur_array.pop()
