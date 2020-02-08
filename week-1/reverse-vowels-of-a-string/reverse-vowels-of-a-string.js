/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let arr = s.split('');
    left = 0;
    right = arr.length - 1
    while (left<right) {
        while (left<right && !vowels.has(arr[left])) left++;
        while (left<right && !vowels.has(arr[right])) right--;
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    
    return arr.join('');
};
