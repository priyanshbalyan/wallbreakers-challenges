/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s) return true;
    
    let index = 0;
    for (let i of t) {
        if (i === s[index])
            ++index;
        if (index === s.length) return true;
    }
    
    return false;
};
