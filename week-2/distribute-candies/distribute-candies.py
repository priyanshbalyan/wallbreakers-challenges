class Solution:
    def distributeCandies(self, candies: List[int]) -> int:
        hashtable = {}
        for i in candies:
            hashtable[i] = hashtable[i] + 1 if i in hashtable else 1
        
        limit = len(candies) //2
        return min(len(hashtable.items()), limit)
