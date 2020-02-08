/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    while (x || y) {
        count += (x&1) ^ (y&1);
        x >>= 1;
        y >>= 1;
    }
    
    return count;
};
