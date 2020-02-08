/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let res = 0;
    let placeValue = s.length - 1;
    s.split('').forEach(i => {
        res += (i.charCodeAt() - 64) * (26**placeValue);
        placeValue--;
    });
    return res;
};
