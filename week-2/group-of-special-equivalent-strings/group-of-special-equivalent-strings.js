/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    const hashtable = {};
    for (let string of A) {
        const odd = new Array(26).fill(0);
        const even = new Array(26).fill(0);
        for (let i=0; i<string.length; i++) {
            if (i%2 === 0)
                ++even[string[i].charCodeAt() - 'a'.charCodeAt()];
            else
                ++odd[string[i].charCodeAt() - 'a'.charCodeAt()];
        }
        state = odd + '~' + even;
        hashtable[state] = true;
    }
    
    return Object.keys(hashtable).length;
};
