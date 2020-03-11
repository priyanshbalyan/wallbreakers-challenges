/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];
    
    const res = [];
    const stack = [root];
    
    while (stack.length) {
        cur = stack.pop();
        for (let i of cur.children) {
            stack.push(i);
        }
        res.push(cur.val);
    }
    
    return res.reverse();
};
