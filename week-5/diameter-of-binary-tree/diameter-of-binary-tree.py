# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        if not root: return 0
        res = [0]
        self.recurse(root, res)
        return res[0]-1 #diameter is node_sum - 1
    
    def recurse(self, root, res):
        if not root:
            return 0
        
        left = self.recurse(root.left, res)
        right = self.recurse(root.right, res)
        
        res[0] = max(res[0], left+right+1) # node sum of left + right + current_node
        
        return max(left, right) + 1
