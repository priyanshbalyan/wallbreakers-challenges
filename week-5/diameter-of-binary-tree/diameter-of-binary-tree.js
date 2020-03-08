/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    const res = [0];
    recurse(root, res);
    return res[0]-1;
};

const recurse = (root, res) => {
    if (!root) return 0;
    
    const left = recurse(root.left, res);
    const right = recurse(root.right, res);
    
    res[0] = Math.max(res[0], left+right+1) // sum of left, right nodes + current_node
    
    return Math.max(left, right) + 1
};
