class Solution:
    def frequencySort(self, s: str) -> str:
        hashtable = {}
        for i in s:
            hashtable[i] = hashtable[i] + 1 if i in hashtable else 1
        
        letters = list(hashtable.items())
        letters.sort(key=lambda x: x[1])
        
        res = []
        for i in letters[::-1]:
            res += i[0]*i[1]
        
        return res
        
