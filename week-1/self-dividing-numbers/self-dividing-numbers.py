class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        res = []
        for num in range(left, right+1):
            temp = num
            flag = False
            while temp:
                digit = temp%10
                temp //= 10
                if digit == 0 or num % digit != 0:
                    flag = True
                    break
                    
            if not flag:
                res.append(num)
        
        return res
