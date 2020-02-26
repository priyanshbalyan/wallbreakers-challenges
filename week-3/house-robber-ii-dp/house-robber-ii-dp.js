/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);
    
    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length-1)));
};

const helper = (nums) => {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i=2; i<nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    
    return dp[dp.length-1];
};
