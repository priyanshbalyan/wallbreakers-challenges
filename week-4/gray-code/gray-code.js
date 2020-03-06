/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const res = [0];
    for (let i=0; i<n; i++) {
        const size = res.length;
        for (let j=size-1; j>=0; j--)
            res.push(res[j] | 1<<i);
    }
    
    return res;
};
