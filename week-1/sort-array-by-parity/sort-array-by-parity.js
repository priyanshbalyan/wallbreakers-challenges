/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const odd = [], even = [];
    A.forEach(item => {
        if (item%2 == 0) even.push(item);
        else odd.push(item);
    });
    
    return even.concat(odd);
    
};
