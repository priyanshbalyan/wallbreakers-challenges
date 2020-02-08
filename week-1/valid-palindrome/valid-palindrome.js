/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    res = s.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
    return res === res.split('').reverse().join('');
};
