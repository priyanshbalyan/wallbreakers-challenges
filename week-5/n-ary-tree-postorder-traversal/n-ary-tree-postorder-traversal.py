"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        if not root:
            return []
        res = []
        stack = [root]
        while stack:
            cur = stack.pop();
            for i in cur.children:
                stack.append(i)
            res.append(cur.val)
            
        return res[::-1]
