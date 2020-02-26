/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        n = -n;
        x = 1/x;
    }
    
    let power = 1;
    while (n) {
        if (n%2 == 1) power *= x;
        x *= x;
        n = Math.floor(n/2);
    }
    
    return power;
};
