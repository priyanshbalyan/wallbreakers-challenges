/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    const hashtable = {};
    let power = 0, count = 0, coefficient = 1;
    let elem = '';
    const stack = [];
    
    for (let i of formula.split('').reverse()) {
        if (i >= '0' && i<='9') {
            count += parseInt(i) * (10**power);
            ++power;
        } else if (i === '(') {
            coefficient /= stack.pop();
            count = power = 0;
        } else if (i === ')') {
            stack.push(count);
            coefficient *= count;
            count = power = 0;
        } else if (i === i.toLowerCase()) {
            elem += i;
        } else if (i === i.toUpperCase()) {
            elem += i;
            rev = elem.split('').reverse().join('');
            if (!(rev in hashtable)) hashtable[rev] = 0;
            hashtable[rev] += (count || 1) * coefficient;
            count = power = 0;
            elem = '';
        }
    }
        
    return Object.entries(hashtable).sort().map(item => item[0] + (item[1] === 1 ? '' : item[1])).join('');
    
};
