/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashtable = {};
    let result = [];
    nums.every((num, i) => {
        if (hashtable.hasOwnProperty(target-num)) {
            result = [i, hashtable[target-num]];
            return false;
        }
        hashtable[num] = i;
        return true;
    });
    return result;
};
