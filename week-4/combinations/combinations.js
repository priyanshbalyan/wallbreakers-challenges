/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    recurse([], 1, n, k, res);
    return res;
};

const recurse = (cur_array, index, n, k, res) => {
    if (k === 0) {
        res.push(cur_array.slice());
        return;
    }
    
    for (let i=index; i<=n; i++) {
        cur_array.push(i);
        recurse(cur_array, i+1, n, k-1, res);
        cur_array.pop();
    }
}
