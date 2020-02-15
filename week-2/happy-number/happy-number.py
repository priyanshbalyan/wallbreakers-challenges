class Solution:
    def isHappy(self, n: int) -> bool:
        hashtable = {}
        while n != 1:
            if n in hashtable:
                return False
            hashtable[n] = True
            
            sum_digits = 0
            while n:
                sum_digits += (n%10)**2
                n //= 10
            n = sum_digits
        
        return True
