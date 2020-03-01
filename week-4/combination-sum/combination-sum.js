/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    recurse(candidates, 0, [], target, res);
    return res;
};

const recurse = (candidates, index, cur_array, target, res) => {
    if (target === 0) {
        res.push(cur_array.slice())
        return;
    }
    if (target < 0) return;
    
    for (let i=index; i<candidates.length; i++) {
        cur_array.push(candidates[i]);
        recurse(candidates, i, cur_array, target-candidates[i], res);
        cur_array.pop();
    }
}
