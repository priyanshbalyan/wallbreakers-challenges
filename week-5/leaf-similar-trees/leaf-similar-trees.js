/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const res1 = [], res2 = [];
    recurse(root1, res1);
    recurse(root2, res2);
    
    return res1.toString() === res2.toString();
};

const recurse = (root, res) => {
    if (!root) return;
    
    if (!root.left && !root.right) res.push(root.val);
    
    recurse(root.left, res);
    recurse(root.right, res)
};
