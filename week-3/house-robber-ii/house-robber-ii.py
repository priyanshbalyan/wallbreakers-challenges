class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums or len(nums) == 0: return 0
        
        if len(nums) == 1: return nums[0]
        if len(nums) == 2: return max(nums)
        
        return max(self.helper(nums[:-1]), self.helper(nums[1:]))
    
    def helper(self, nums):
        dp = [0 for i in nums]

        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])
        
        for i in range(2, len(nums)):
            dp[i] = max(dp[i-2] + nums[i], dp[i-1])
            
        return dp[-1]
            
