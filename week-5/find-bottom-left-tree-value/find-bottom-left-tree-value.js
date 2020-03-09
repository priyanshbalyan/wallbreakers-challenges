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
var findBottomLeftValue = function(root) {
    if (!root) return null;
    
    queue = [root];
    while (queue.length) {
        size = queue.length;
        arr = [];
        while (size) {
            cur = queue.shift();
            arr.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
            --size;
        }
    }
    
    return arr[0];
};
