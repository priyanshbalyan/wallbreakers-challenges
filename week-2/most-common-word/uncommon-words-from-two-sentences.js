/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const hashtable = {}
    for (let i of A.split(' ').concat(B.split(' '))) {
        hashtable[i] = i in hashtable ? ++hashtable[i] : 1;
    }
    
    return Object.entries(hashtable).filter(item => item[1] === 1).map(item => item[0]);
};
