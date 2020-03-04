/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let dummy1 = new ListNode(-1);
    let dummy2 = new ListNode(-1);
    let odd = dummy1;
    let even = dummy2;
    
    while (head) {
        odd.next = head;
        even.next = head.next;
        
        head = head.next ? head.next.next : null;
        odd = odd.next;
        even = even.next;
    }
    
    odd.next = dummy2.next;
    return dummy1.next;
    
};
