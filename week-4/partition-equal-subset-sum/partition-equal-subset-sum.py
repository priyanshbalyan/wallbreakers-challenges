class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        if sum(nums) %2 != 0: return False
        hashtable = {}
        return self.backtrack(0, 0, sum(nums), nums, hashtable)
    
    def backtrack(self, index, cur_sum, total, nums, hashtable):
        state = str(cur_sum) + '~~' + str(index)
        if state in hashtable:
            return hashtable[state]
        
        elif cur_sum*2 == total:
            hashtable[state] = True
        
        elif cur_sum > total/2 or index >= len(nums):
            hashtable[state] = False
    
        else:
            hashtable[state] = self.backtrack(index+1, cur_sum, total, nums, hashtable) or self.backtrack(index+1, cur_sum+nums[index], total, nums, hashtable)
            
        return hashtable[state]
