/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const hashtable = {};
    for (let i of J) {
        if (i in hashtable)
            hashtable[i]++;
        else
            hashtable[i] = 1;
    }
    let res = 0;
    for (let i of S) {
        if (i in hashtable) res++;
    }
    return res;
};
