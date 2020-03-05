/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const stack1 = [];
    const stack2 = [];
    
    for (let i of S) {
        if (i === '#') {
            if (stack1.length) stack1.pop();
        } else
            stack1.push(i);
    }
    
    for (let i of T) {
        if (i === '#') {
            if (stack2.length) stack2.pop();
        } else
            stack2.push(i);
    }
    
    return stack1.join('') === stack2.join('');
};
