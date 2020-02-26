/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const memo = {};

var minDistance = function(word1, word2) {
    const state = word1 + '~~' + word2;
    
    if (state in memo) return memo[state];
    if (word1.length === 0 && word2.length === 0) memo[state] = 0;
    else if (word1.length === 0) memo[state] = 1 + minDistance(word1, word2.slice(1));
    else if (word2.length === 0) memo[state] =  1 + minDistance(word1.slice(1), word2);
    else if (word1[0] === word2[0]) memo[state] = minDistance(word1.slice(1), word2.slice(1));
    
    else memo[state] =  1 + Math.min(minDistance(word1.slice(1), word2.slice(1)), minDistance(word1.slice(1), word2), minDistance(word1, word2.slice(1)));

    return memo[state];
};
