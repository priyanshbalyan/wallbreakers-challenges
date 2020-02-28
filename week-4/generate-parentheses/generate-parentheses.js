/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    backtrack(0, 0, '', n, res);
    return res;
};

const backtrack = (left, right, cur_string, n, res) => {
    if (cur_string.length === n*2){
        res.push(cur_string);
        return;
    }
    
    if (left<n) backtrack(left + 1, right, cur_string + '(', n, res);
    if (right<left) backtrack(left, right + 1, cur_string + ')', n, res);
};
