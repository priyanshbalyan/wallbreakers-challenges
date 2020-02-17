/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const hashtable = {};
    const res = [];
    for (let i of nums) {
        if (i in hashtable)
            res.push(i)
        hashtable[i] = true;
    }
    
    for (let i=1; i<=nums.length; i++) {
        if (!(i in hashtable)) {
            res.push(i);
            break;
        }
    }
    
    return res;
};
