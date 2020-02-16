/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hashtable = {};
    for (let i of s) {
        if (!(i in hashtable)) hashtable[i] = 0;
        hashtable[i]++;
    }
    
    for (let i of t) {
        if (!(i in hashtable) || hashtable[i] === 0) return i;
        hashtable[i]--;
    }
    
    return null;
};
