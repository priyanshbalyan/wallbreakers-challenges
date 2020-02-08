/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let res = 0;
    let power = 1;
    while (num) {
        res += ((num&1)^1) * power;
        power <<= 1;
        num >>= 1;
    }
    return res;
};
