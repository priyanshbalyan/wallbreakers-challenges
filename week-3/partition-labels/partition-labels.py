class Solution:
    def partitionLabels(self, S: str) -> List[int]:
        hashtable = {}
        for i in range(len(S)):
            hashtable[S[i]] = i
            
        index = 0
        res = []
        while index < len(S):
            last_index = hashtable[S[index]]
            j = index
            while j < last_index:
                last_index = max(hashtable[S[j]], last_index)
                j += 1
            res.append(last_index - index + 1) #get size of parts
            index = last_index+1
            
        return res
