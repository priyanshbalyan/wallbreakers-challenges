/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    index = digits.length - 1;
    while(index >=0) {
        if (digits[index] === 9) {
            digits[index] = 0;
            index -= 1;
        } else {
            digits[index] += 1;
            return digits;
        }
    }
    
    return [1].concat(digits);
};
