/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = [];
    if (!s || !p || p.length > s.length) return res;
    
    p = p.split('').sort().join('');
    
    for (let i=0; i <= s.length - p.length; i++) {
        if (s.slice(i, i+p.length).split('').sort().join('') === p) res.push(i)
    }
    
    return res;
};
