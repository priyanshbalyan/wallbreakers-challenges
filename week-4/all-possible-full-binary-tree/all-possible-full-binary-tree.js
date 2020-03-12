/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
const memo = {};
var allPossibleFBT = function(N) {
    if (N===0) return [];
    if (N===1) return [new TreeNode(0)];
    
    if (N in memo) return memo[N];
    
    const res = [];
    for (let i=0; i<N; i++) {
        const j = N-1-i;
        for (let left of allPossibleFBT(i)) {
            for (let right of allPossibleFBT(j)) {
                const temp = new TreeNode(0);
                temp.left = left;
                temp.right = right;
                res.push(temp);
            }
        }
    }
    
    memo[N] = res;
    return memo[N];
};
