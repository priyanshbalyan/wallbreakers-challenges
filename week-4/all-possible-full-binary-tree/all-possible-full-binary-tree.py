# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.memo = {}
        
    def allPossibleFBT(self, N: int) -> List[TreeNode]:
        if N == 0: return []
        if N == 1: return [TreeNode(0)]
        
        if N in self.memo: return self.memo[N]
        
        res = []
        for i in range(N):
            j = N-1-i
            for left in self.allPossibleFBT(i):
                for right in self.allPossibleFBT(j):
                    temp = TreeNode(0)
                    temp.left = left
                    temp.right = right
                    res.append(temp)
        
        self.memo[N] = res
        return self.memo[N]
