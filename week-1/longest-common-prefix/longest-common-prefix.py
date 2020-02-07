class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs or len(strs) == 0:
            return ''
        prefix = ''
        index = 0
        for i in strs[0]:
            for j in range(1, len(strs)):
                if index >= len(strs[j]) or i != strs[j][index]:
                    return prefix
            prefix += i
            index += 1
        
        return prefix
