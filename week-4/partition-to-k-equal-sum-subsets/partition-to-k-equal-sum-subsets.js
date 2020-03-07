/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const sum = nums.reduce((a,b)=>a+b, 0);
    if (k<=0 || sum%k !== 0 || k>nums.length) return false;
    
    return backtrack(0, 0, sum/k, k, nums, new Array(nums.length).fill(false));
};

const backtrack = (index, cur_sum, total, k, nums, seen) => {
    if (k === 1) return true;
    
    if (cur_sum === total) return backtrack(0, 0, total, k-1, nums, seen);
    
    for (let i=index; i<nums.length; i++) {
        if (!seen[i]) {
            seen[i] = true;
            if (backtrack(i, cur_sum + nums[i], total, k, nums, seen)) return true;
            seen[i] = false;
        }
    }
    
    return false;
}
