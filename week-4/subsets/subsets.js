/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    recurse(nums, 0, [], res);
    return res;
};

const recurse = (nums, index, cur_array, res) => {
    res.push(cur_array.slice());
    
    for (let i=index; i<nums.length; i++) {
        cur_array.push(nums[i]);
        recurse(nums, i+1, cur_array, res);
        cur_array.pop();
    }
};
