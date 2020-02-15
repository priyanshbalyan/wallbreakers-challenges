/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const hashtable = {};
    for (let i of nums1) {
        hashtable[i] = true;
    }
    
    const res = [];
    for (let i of nums2) {
        if (i in hashtable) {
            res.push(i);
            delete hashtable[i];
        }
    }
    
    return res;
};
