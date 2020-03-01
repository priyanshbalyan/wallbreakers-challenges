class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        visited = {}
        self.recurse(nums, 0, [], visited,res)
        return res
    
    def recurse(self, nums, index, cur_array, visited, res):
        if len(cur_array) == len(nums):
            res.append(cur_array[:])
            return
        
        for i in range(0, len(nums)):
            if nums[i] in visited and visited[nums[i]]: continue
            cur_array.append(nums[i])
            visited[nums[i]] = True
            self.recurse(nums, i, cur_array, visited, res)
            cur_array.pop()
            visited[nums[i]] = False
