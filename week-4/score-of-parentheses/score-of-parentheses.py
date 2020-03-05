class Solution:
    def scoreOfParentheses(self, S: str) -> int:
        count = 0
        stack = []
        for i in S:
            if i == '(':
                stack.append(count)
                count = 0
            else:
                count = stack.pop() + max(count*2, 1)
        
        return count    
