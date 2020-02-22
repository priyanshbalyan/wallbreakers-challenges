/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b)=>a-b);
    s = s.sort((a,b)=>a-b);
    
    let c_index = 0, cookie_index = 0;
    while (c_index < g.length && cookie_index < s.length) {
        if (s[cookie_index] >= g[c_index]) ++c_index;
        ++cookie_index;
    }
    
    return c_index;
};
