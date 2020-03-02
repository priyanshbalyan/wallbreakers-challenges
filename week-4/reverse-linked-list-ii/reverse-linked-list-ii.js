/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(-1);
    let prev = dummy;
    dummy.next = head;
    
    for (let i=0; i<m-1; i++) {
        prev = head;
        head = head.next;
    }
    
    const left = prev;
    const tail = head;
    
    for (let i=0; i<=n-m; i++) {
        let tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }
    
    left.next = prev;
    tail.next = head;
    
    return dummy.next;
};
