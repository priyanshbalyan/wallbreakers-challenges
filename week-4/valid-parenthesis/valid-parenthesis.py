class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = { '}': '{', ']': '[', ')': '(' }
        for i in s:
            if i in pairs:
                if stack and stack[-1] == pairs[i]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(i)
            
        return len(stack) == 0
