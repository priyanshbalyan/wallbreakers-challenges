class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        return sum([num for i, num in enumerate(sorted(nums)) if i%2 == 0])
