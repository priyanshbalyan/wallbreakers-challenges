class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            n = -n
            x = 1/x
        power = 1
        while n:
            if n%2 == 1:
                power *= x
            x *= x
            n //= 2
        
        return power
