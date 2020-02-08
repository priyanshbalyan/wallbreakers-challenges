/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.toLowerCase() === word) return true;
    if (word.toUpperCase() === word) return true;
    if (word[0].toLowerCase()+word.slice(1) === word.toLowerCase()) return true;
    return false;
};
