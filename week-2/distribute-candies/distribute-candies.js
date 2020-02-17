/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const hashtable = {};
    for (let i of candies) {
        i in hashtable ? hashtable[i]++ : hashtable[i] = 1;
    }
    
    return Math.min(Object.keys(hashtable).length, candies.length/2);
};
