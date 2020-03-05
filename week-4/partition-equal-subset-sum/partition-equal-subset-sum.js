/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a,b)=>a+b, 0);
    if (sum %2 !== 0) return false;
    const hashtable = {};
    return backtrack(0, 0, sum, nums, hashtable);
};

const backtrack = (index, cur_sum, total, nums, hashtable) => {
    const state = cur_sum + '~~' + index;
    if (state in hashtable) return hashtable[state];
    
    if (cur_sum*2 === total) hashtable[state] = true;
    
    else if (cur_sum > total || index >= nums.length) hashtable[state] = false;
    
    else
        hashtable[state] = backtrack(index+1, cur_sum, total, nums, hashtable) || backtrack(index+1, cur_sum+nums[index], total, nums, hashtable);
    
    return hashtable[state];
}
