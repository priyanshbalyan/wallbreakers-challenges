/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const hashtable = {}
    for (let i of s) {
        if (i in hashtable)
            ++hashtable[i];
        else
            hashtable[i] = 1;
    }
    
    const letters = Object.entries(hashtable).sort((a, b) => a[1]-b[1]);
    let res = '';
    for (let i of letters.reverse()) {
        res += new Array(i[1]).fill(i[0]).join('');
    }
    
    return res;
};
