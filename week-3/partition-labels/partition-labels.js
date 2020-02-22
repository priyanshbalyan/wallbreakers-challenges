/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const hashtable = {};
    for (let i=0; i<S.length; i++) {
        hashtable[S[i]] = i;
    }
    const res = [];
    let index = 0;
    while (index < S.length) {
        let last_index = hashtable[S[index]];
        j = index;
        while (j < last_index) {
            last_index = Math.max(hashtable[S[j]], last_index);
            ++j;
        }
        
        res.push(last_index - index + 1);
        index = last_index + 1;
    }
    
    return res;
};
