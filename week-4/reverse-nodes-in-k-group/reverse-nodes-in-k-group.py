# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        dummy = ListNode(-1)
        dummy.next = head
        begin = dummy
        i = 0
        while head:
            i += 1
            if i%k == 0:
                begin = self.reverse(begin, head.next)
                head = begin.next
            else:
                head = head.next
        
        return dummy.next
    
    def reverse(self, begin, end):
        prev = begin
        cur = begin.next
        first = cur
        
        while cur != end:
            temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        
        begin.next = prev #list is reversed so prev is first node of slice
        first.next = cur # cur has moved to first node of next slice
        return first
