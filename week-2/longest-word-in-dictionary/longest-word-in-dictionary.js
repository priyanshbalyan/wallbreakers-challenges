/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const hashtable = { '': true };
    let longest = '';
    words.sort();
    for (let word of words) {
        if (word.slice(0, -1) in hashtable){
            hashtable[word] = true;
            if (word.length > longest.length)
                longest = word;
        }
    }
    
    return longest;
};
