class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        hashtable = {}
        res = []
        for i in nums:
            if i in hashtable:
                res.append(i)
            hashtable[i] = True
        
        for i in range(1, len(nums)+1):
            if i not in hashtable:
                res.append(i)
                break
                
        return res
