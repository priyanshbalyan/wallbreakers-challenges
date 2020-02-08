/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Object.keys(new Array(n+1).fill(null)).slice(1).map(x => !(x%15) ? 'FizzBuzz' : !(x%3) ? 'Fizz' : !(x%5) ? 'Buzz' : (x+''));
};
