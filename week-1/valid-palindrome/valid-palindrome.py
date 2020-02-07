class Solution:
    def isPalindrome(self, s: str) -> bool:
        res = ''.join([i if i.isalnum() else '' for i in s]).lower()
        return res == res[::-1]
