/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(row => row.reverse().map(item => item ? 0 : 1));    
};
