class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        min_buy = float('inf')
        for price in prices:
            if price < min_buy:
                min_buy = price
            profit = max(profit, price - min_buy)
            
        return profit
