# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

import heapq
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        
        heap = [(l.val, i, l) for i, l in enumerate(lists) if l]
        heapq.heapify(heap) # O(klogk)  k lists
        
        dummy = ListNode(-1)
        ptr = dummy
        
        while heap: #O(n)   n nodes
            val, i, node = heapq.heappop(heap) # O(logk)
            ptr.next = node
            ptr = ptr.next
            
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next)) #O(logk)
        
        return dummy.next  # Time Complexity: O(nlogk) Space Complexity: O(k)
