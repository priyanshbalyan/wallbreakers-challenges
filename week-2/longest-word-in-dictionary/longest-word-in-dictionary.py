class Solution:
    def longestWord(self, words: List[str]) -> str:
        hashtable = { '': True }
        longest = ''
        words.sort()
        for word in words:
            if word[:-1] in hashtable:
                hashtable[word] = True
                if len(word) > len(longest):
                    longest = word
                    
        return longest
