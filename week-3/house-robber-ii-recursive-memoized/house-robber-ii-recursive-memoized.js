/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);
    
    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length-1)));
};

const memo = {};
const helper = (nums) => {
    const state = nums.toString();
    if (state in memo) return memo[state];
    
    if (nums.length <= 2) memo[state] = Math.max(...nums);
    else memo[state] = Math.max(helper(nums.slice(2)) + nums[0], helper(nums.slice(1)));
    
    return memo[state];
};
