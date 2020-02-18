class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> List[str]:
        hashtable = {}
        for i in A.split() + B.split():
            hashtable[i] = hashtable[i] + 1 if i in hashtable else 1
            
        return [key for key, val in hashtable.items() if val == 1]
