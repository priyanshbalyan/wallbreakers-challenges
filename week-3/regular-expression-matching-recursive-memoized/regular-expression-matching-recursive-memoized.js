/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const memo = {};

var isMatch = function(s, p) {
    const state = s + '~~' + p;
    if (state in memo) return memo[state];
    
    if (p.length === 0) memo[state] = s.length === 0;
    else if (p.length >= 2 && p[1] === '*') {
        const match = s.length != 0 && (s[0] === p[0] || p[0] === '.');    
        memo[state] = isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p));
    }else {
        const match = s.length != 0 && (s[0] === p[0] || p[0] === '.');
        memo[state] = isMatch(s.slice(1), p.slice(1))
    }
    
    return memo[state];
};
