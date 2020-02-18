/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const hashtable = {};
    for (let word of words) {
        let transform = '';
        for (let letter of word) {
            transform += morse[letter.charCodeAt() - 'a'.charCodeAt()]
        }
        
        hashtable[transform] = true;
    }
    
    return Object.keys(hashtable).length;
};
