class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashtable = {}
        
        for i in range(len(nums)):
            if target - nums[i] in hashtable:
                return [i, hashtable[target-nums[i]]]
            hashtable[nums[i]] = i
            
        return []
