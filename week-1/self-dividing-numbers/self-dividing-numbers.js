/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = [];
    for (let i=left; i<=right; i++) {
        let temp = i
        let flag = false;
        while (temp) {
            digit = temp%10
            temp = Math.floor(temp/10)
            if (digit === 0 || i % digit !== 0) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            res.push(i)
        }
    }
    
    return res;
};
