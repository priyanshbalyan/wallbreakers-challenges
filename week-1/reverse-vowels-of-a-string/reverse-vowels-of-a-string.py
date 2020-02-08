class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
        left = 0
        right = len(s) - 1
        arr = list(s)
        while left<right:
            while left<right and arr[left] not in vowels:
                left += 1
            while left<right and arr[right] not in vowels:
                right -= 1
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1
        
        return ''.join(arr)
