/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const array = new Array(26).fill(0);
    for (let i of s) {
        array[i.charCodeAt() - 'a'.charCodeAt()]++;
    }
    
    for (let i=0; i<s.length; i++) {
        if (array[s[i].charCodeAt() - 'a'.charCodeAt()] === 1)
            return i;
    }
    
    return -1;
};
