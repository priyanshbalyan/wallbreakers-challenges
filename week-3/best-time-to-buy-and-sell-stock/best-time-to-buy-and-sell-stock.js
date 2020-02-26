/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min_buy = Infinity;
    let profit = 0;
    for (let price of prices) {
        if (price < min_buy) min_buy = price;
        profit = Math.max(profit, price - min_buy);
    }
    
    return profit;
};
