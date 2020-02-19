class Solution:
    def numSpecialEquivGroups(self, A: List[str]) -> int:
        hashtable = {}
        for string in A:
            odd = [0]*26
            even = [0]*26
            for i in range(len(string)):
                if i%2 == 0:
                    even[ord(string[i]) - ord('a')] += 1
                else:
                    odd[ord(string[i]) - ord('a')] += 1
            state = str(odd) + str(even)
            hashtable[state] = True
        
        return len(hashtable.keys())
        
        
