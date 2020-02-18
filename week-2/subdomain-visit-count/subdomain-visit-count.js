/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const hashtable = {};
    for (let domain of cpdomains) {
        let [count, string] = domain.split(' ');
        count = parseInt(count);
        const array = string.split('.');
        for (let i=0; i<array.length; i++) {
            const string = array.slice(i).join('.');
            if (string in hashtable)
                hashtable[string] = hashtable[string] + count;
            else
                hashtable[string] = count;
        }
    }
    
    return Object.entries(hashtable).map(array => `${array[1]} ${array[0]}`);
    
};
