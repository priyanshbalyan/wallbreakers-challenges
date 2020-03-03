class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        hashtable = {}
        res = []
        for num in nums2:
            while len(stack) and stack[-1] < num:
                hashtable[stack.pop()] = num
            stack.append(num)
            
        return [hashtable[num] if num in hashtable else -1 for num in nums1]
