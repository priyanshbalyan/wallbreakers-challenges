/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(/,|!|\?|'|,|;|\./g, ' ').toLowerCase().split(/\s+/g);
    const banned_list = {};
    for (let word of banned) {
        banned_list[word] = true;
    }
    const word_counts = {};
    let max_count = 0;
    let max_word = '';
    for (let word of paragraph) {
        if (!(word in banned_list)) {
            word_counts[word] = word in word_counts ? word_counts[word] + 1 : 1;
            if (word_counts[word] > max_count) {
                max_word = word;
                max_count = word_counts[word];
            }
        }
    }
    
    return max_word;
};
