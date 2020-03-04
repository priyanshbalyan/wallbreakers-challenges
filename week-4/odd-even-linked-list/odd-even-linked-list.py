# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        dummy1 = ListNode(-1)
        dummy2 = ListNode(-1)
        odd = dummy1
        even = dummy2
        
        while head:
            odd.next = head
            even.next = head.next
            
            odd = odd.next
            even = even.next
            head = head.next.next if head.next else None
            
        odd.next = dummy2.next
        return dummy1.next
            
            
