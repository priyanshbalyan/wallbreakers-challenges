class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        if k == 0 or sum(nums)%k != 0 or k > len(nums):
            return False
        
        return self.backtrack(0, 0, sum(nums)//k, [False]*len(nums), k, nums)
    
    def backtrack(self, index, cur_sum, total, seen, k, nums):
        if k == 1:
            return True
        
        if cur_sum == total:
            return self.backtrack(0, 0, total, seen, k-1, nums)
        
        for i in range(index, len(nums)):
            if not seen[i]:
                seen[i] = True
                if self.backtrack(i, cur_sum + nums[i], total, seen, k, nums):
                    return True
                seen[i] = False
                
        return False
