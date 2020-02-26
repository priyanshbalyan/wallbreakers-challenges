/**
 * @param {number[]} prices
 * @return {number}
 */
const memo = {};

var maxProfit = function(prices, min_buy = Infinity) {
    const state = prices.toString() + '~~' + min_buy;
    if (prices.length === 0) memo[state] = 0;
    else {
        if (prices[0] < min_buy) min_buy = prices[0];
        memo[state] = Math.max(maxProfit(prices.slice(1), min_buy), prices[0] - min_buy);
    }
    
    return memo[state];
};
