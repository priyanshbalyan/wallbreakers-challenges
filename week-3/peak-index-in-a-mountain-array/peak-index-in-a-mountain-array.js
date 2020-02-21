/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let left = 0;
    let right = A.length-1;
    while (left < right) { 
        mid = left + Math.floor((right-left)/2);
        
        if (A[mid] < A[mid+1]) left = mid + 1;
        else right = mid
    }
    
    return left;
};
