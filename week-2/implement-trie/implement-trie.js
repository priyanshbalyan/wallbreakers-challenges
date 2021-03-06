/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.trie = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let ptr = this.trie;

    for(let i=0; i<word.length; i++) {
        if (!ptr.hasOwnProperty(word[i])) ptr[word[i]] = {};
        ptr = ptr[word[i]];
    }
    
    ptr['@'] = true; // signifies end of string
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let ptr = this.trie;
    for (let i=0; i<word.length; i++) {
        if (!ptr.hasOwnProperty(word[i])) return false;
        ptr = ptr[word[i]];
    }
    
    if (ptr.hasOwnProperty('@')) return true;
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let ptr = this.trie;
    for (let i=0; i<prefix.length; i++) {
        if (!ptr.hasOwnProperty(prefix[i])) return false;
        ptr = ptr[prefix[i]];
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
