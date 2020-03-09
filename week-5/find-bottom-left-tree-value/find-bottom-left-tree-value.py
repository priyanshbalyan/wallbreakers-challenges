# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findBottomLeftValue(self, root: TreeNode) -> int:
        if not root: return None
        
        queue = collections.deque([root])
        while queue:
            size = len(queue)
            arr = []
            while size:
                cur = queue.popleft()
                arr.append(cur.val)
                size -= 1
                if cur.left:
                    queue.append(cur.left)
                if cur.right:
                    queue.append(cur.right)
        
        return arr[0]
