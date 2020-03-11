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
var longestUnivaluePath = function(root) {
    const res = [0];
    recurse(root, res);
    return res[0];
};

const recurse = (root, res) => {
    if (!root) return;
    
    const left = dfs(root.left, root.val);
    const right = dfs(root.right, root.val);
    
    res[0] = Math.max(res[0], left+right);
    
    recurse(root.left, res);
    recurse(root.right, res);
};

const dfs = (root, cur) => {
    if (!root || cur !== root.val) return 0;
    
    return 1 + Math.max(dfs(root.left, root.val), dfs(root.right, root.val));
}
