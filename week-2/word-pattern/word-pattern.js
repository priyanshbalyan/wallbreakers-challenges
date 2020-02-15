/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    if (!pattern || !str) return false;
    
    return createMapping(pattern) === createMapping(str.split(' '));
};

const createMapping = (string) => {
    const hashtable = {};
    let counter = 0;
    let mapping = '';
    for (let i of string) {
        if (!(i in hashtable)) {
            hashtable[i] = counter;
            ++counter;
        }
        mapping += hashtable[i];
    }
    
    return mapping;
}
