/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    return createMapping(s) === createMapping(t);
};

const createMapping = (string) => {
    const hashtable = {};
    let counter = 0
    let mapping = '';
    string.split('').forEach(i => {
        if (!hashtable.hasOwnProperty(i)) {
            hashtable[i] = counter;
            ++counter;
        }
        mapping += hashtable[i];
    });
    
    return mapping;
};
