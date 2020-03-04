import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashtable = {}
        heap = []
        for num in nums:
            hashtable[num] = hashtable[num] + 1 if num in hashtable else 1
        
        for key, val in hashtable.items():
            heapq.heappush(heap, (val, key))
            
            if len(heap) > k:
                heapq.heappop(heap)
                
        
        return [key for val, key in heap]
