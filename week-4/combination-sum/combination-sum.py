class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        self.recurse(candidates, 0, [], target, res)
        return res
    
    def recurse(self, candidates, index, cur_array, target, res):
        if target == 0:
            res.append(cur_array[:])
            return
        if target < 0:
            return
        
        for i in range(index, len(candidates)):
            cur_array.append(candidates[i])
            self.recurse(candidates, i, cur_array, target-candidates[i], res)
            cur_array.pop()
