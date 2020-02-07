/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    if (A.lenth === 0) return [];
    res = []
    for (let j=0; j<A[0].length; j++) {
        temp = [];
        for (let i=0; i<A.length; i++) {
            temp.push(A[i][j]);
        }
        res.push(temp);
    }
    
    return res;
};
