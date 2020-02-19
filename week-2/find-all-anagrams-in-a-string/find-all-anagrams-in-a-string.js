/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = [];
    if (!s || s.length === 0 || p.length > s.length) return res;
    
    const array = new Array(26).fill(0);
    for (let i of p) {
        ++array[i.charCodeAt() - 'a'.charCodeAt()];
    }
    
    let left = 0;
    let right = 0;
    let count = p.length;
    
    while (right < s.length) {
        if (array[s[right].charCodeAt() - 'a'.charCodeAt()] >= 1) {
            --count;
        }
        
        --array[s[right].charCodeAt() - 'a'.charCodeAt()];
        ++right;
        
        if (count === 0) res.push(left);
        
        if (right-left === p.length) {
            if (array[s[left].charCodeAt() - 'a'.charCodeAt()] >= 0) {
                ++count;
            }
            
            ++array[s[left].charCodeAt() - 'a'.charCodeAt()];
            ++left;
        }
    }
    return res;
};
