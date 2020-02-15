import collections
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return collections.Counter(nums1) & collections.Counter(nums2)
            
