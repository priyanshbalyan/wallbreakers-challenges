class Solution:
    def __init__(self):
        self.memo = {}
        
    def maxProfit(self, prices: List[int], min_buy = float('inf')) -> int:
        state = str(prices) + '~~' + str(min_buy)
        if len(prices) == 0:
            self.memo[state] = 0
        else:
            if prices[0] < min_buy:
                min_buy = prices[0]
        
            self.memo[state] = max(self.maxProfit(prices[1:], min_buy), prices[0] - min_buy)
        return self.memo[state]
