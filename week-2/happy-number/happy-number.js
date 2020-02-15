/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const hashtable = {}
    while(n !== 1) {
        if (hashtable.hasOwnProperty(n)) return false;
        
        hashtable[n] = true;
        
        let sum_digits = 0;
        while(n) {
            sum_digits += (n%10)**2;
            n = Math.floor(n/10);
        }
        n = sum_digits;
    }
    
    return true;
};
