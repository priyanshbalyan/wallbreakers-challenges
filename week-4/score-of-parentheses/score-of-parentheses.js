/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    const stack = [];
    let count = 0;
    for (let i of S) {
        if (i === '(') {
            stack.push(count);
            count = 0;
        } else {
            count = stack.pop() + Math.max(count*2, 1);
        }
    }
    
    return count;
};
