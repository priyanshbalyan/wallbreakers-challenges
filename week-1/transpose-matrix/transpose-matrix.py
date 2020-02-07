class Solution:
    def transpose(self, A: List[List[int]]) -> List[List[int]]:
        if len(A) == 0:
            return []
        
        res = []
        for j in range(len(A[0])):
            temp = []
            for i in range(len(A)):
                temp.append(A[i][j])
            res.append(temp)
        
        return res
