/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) return '';
    let prefix = '';
    let index = 0;
    for (let i=0; i<strs[0].length; i++) {
        for (let j=1; j<strs.length; j++) {
            if (index >= strs[j].length || strs[0][i] != strs[j][index]) return prefix;
        }
        prefix += strs[0][i];
        index += 1;
    }
    return prefix
};
