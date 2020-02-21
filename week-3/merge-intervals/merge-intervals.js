/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = [];
    intervals.sort((a, b) => a[0]-b[0]);
    for (let i of intervals) {
        if (res.length === 0 || res[res.length-1][1] < i[0])
            res.push(i)
        else
            res[res.length-1][1] = Math.max(res[res.length-1][1], i[1]);
    }
    
    return res;
};
