# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:
        if not head: return head
        
        dummy = ListNode(-1)
        dummy.next = head
        prev = dummy
        
        for i in range(m-1):
            prev = head
            head = head.next

        left = prev
        tail = head
        for i in range(n-m+1):
            tmp = head.next
            head.next = prev
            prev = head
            head = tmp
        
        left.next = prev
        tail.next = head
        
        return dummy.next
            
