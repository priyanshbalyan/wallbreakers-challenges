/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    xor = nums[0];
    nums.slice(1).forEach(num => xor^=num);
    return xor;
};
