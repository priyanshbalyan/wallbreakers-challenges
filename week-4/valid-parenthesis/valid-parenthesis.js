/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = { ']': '[', ')': '(', '}': '{' };
    const stack = [];
    
    for (let i of s) {
        if (i in pairs) {
            if (stack.length != 0 && stack[stack.length-1] === pairs[i])
                stack.pop();
            else
                return false;
        } else
            stack.push(i);
    }
    
    return stack.length === 0;
};
