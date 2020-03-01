/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const visited = {};
    recurse(nums, 0, [], visited, res);
    return res;
};

const recurse = (nums, index, cur_array, visited, res) => {
    if (cur_array.length === nums.length) {
        res.push(cur_array.slice());
        return;
    }
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] in visited && visited[nums[i]]) continue;
        cur_array.push(nums[i]);
        visited[nums[i]] = true;
        recurse(nums, i, cur_array, visited, res);
        cur_array.pop();
        visited[nums[i]] = false;
    }
};
