# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def longestUnivaluePath(self, root: TreeNode) -> int:
        res = [0]
        self.recurse(root, res)
        return res[0]
    
    def recurse(self, root, res):
        if not root:
            return
        left = self.dfs(root.left, root.val)
        right = self.dfs(root.right, root.val)
        res[0] = max(res[0], left+right)
        
        self.recurse(root.left, res)
        self.recurse(root.right, res)
    
    def dfs(self, root, cur):
        if not root or cur != root.val: return 0
        
        return 1+ max(self.dfs(root.left, root.val), self.dfs(root.right, root.val))
