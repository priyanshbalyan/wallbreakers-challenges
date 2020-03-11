# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
        res1 = []
        self.recurse(root1, res1)
        res2 = []
        self.recurse(root2, res2)
        
        return '~~'.join(res1) == '~~'.join(res2)
        
    def recurse(self, root, res):
        if not root:
            return
        
        if not root.left and not root.right:
            res.append(str(root.val))
            
        self.recurse(root.left, res)
        self.recurse(root.right, res)
