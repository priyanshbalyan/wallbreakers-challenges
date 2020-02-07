class Solution:
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
        return [[0 if i == 1 else 1 for i in j[::-1]] for j in A]
