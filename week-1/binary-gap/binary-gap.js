/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    res = 0;
    let pos = null;
    for (let i=0; i<32; i++) {
        if ((N >> i) & 1) {
            if (pos !== null) res = Math.max(res, i-pos);
            pos = i;
        }
    }
    return res;
};
