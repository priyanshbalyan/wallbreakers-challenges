/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {};
    for (let i of s) {
       map[i] = map.hasOwnProperty(i) ? ++map[i] : 1;
    }
    
    for (let i of t) {
        if (!map.hasOwnProperty(i)) return false;
        --map[i];
        if (map[i] < 0) return false;
    }
    
    if (Object.values(map).reduce((a,b) => a+b, 0) === 0) return true;
    return false;
};
