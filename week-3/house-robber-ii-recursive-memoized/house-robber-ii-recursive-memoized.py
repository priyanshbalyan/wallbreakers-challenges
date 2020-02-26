class Solution:
    def __init__(self):
        self.memo = {}
        
    def rob(self, nums: List[int]) -> int:
        if not nums or len(nums) == 0: return 0
        
        if len(nums) == 1: return nums[0]
        if len(nums) == 2: return max(nums)
        
        return max(self.helper(nums[:-1]), self.helper(nums[1:]))
    
    def helper(self, nums):
        state = str(nums)
        if state in self.memo:
            return self.memo[state]
        
        if len(nums) == 1: self.memo[state] = nums[0]
        elif len(nums) == 2: self.memo[state] = max(nums)
        else:
            self.memo[state] = max(self.helper(nums[2:]) + nums[0], self.helper(nums[1:]))
        
        return self.memo[state]
            
