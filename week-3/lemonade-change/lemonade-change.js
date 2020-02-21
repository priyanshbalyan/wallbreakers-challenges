/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0, tens = 0;
    
    for (let i of bills) {
        if (i === 5) ++fives;
        else if (i === 10)
            if (fives > 0) {
                --fives; ++tens;
            } else return false
        else {
            if (fives>0 && tens>0) {
                --fives;
                --tens;
            } else if (fives >= 3) {
                fives -= 3;
            } else return false;
        }
    }
    
    return true
};
