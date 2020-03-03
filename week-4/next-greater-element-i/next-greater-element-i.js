/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const hashtable = {};
    const stack = [];
    const res = [];
    
    for (let num of nums2) {
        while (stack.length && stack[stack.length-1] < num)
            hashtable[stack.pop()] = num;
        stack.push(num);
    }
    
    return nums1.map(num => num in hashtable ? hashtable[num] : -1);
};
