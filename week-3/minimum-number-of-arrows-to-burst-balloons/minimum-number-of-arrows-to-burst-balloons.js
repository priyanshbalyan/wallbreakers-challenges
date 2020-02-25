/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (!points || points.length === 0) return 0;
    
    points = points.sort((a,b) => a[0]-b[0]);
    let count = 0, min_end = Infinity;
    
    for (let point of points) {
        if (point[0] > min_end) {
            ++count;
            min_end = point[1];
        } else
            min_end = Math.min(min_end, point[1]);
    }
    
    return ++count;
};
