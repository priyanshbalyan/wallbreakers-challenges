class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        self.recurse(nums, 0, [], res)
        return res
    
    def recurse(self, nums, index, cur_array, res):
        res.append(cur_array[:])
        
        for i in range(index, len(nums)):
            cur_array.append(nums[i])
            self.recurse(nums, i+1, cur_array, res)
            cur_array.pop()
