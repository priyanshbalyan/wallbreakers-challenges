/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let begin = dummy;
    let i = 0;
    while (head) {
        ++i;
        if (i%k === 0) {
            begin = reverse(begin, head.next);
            head = begin.next;
        } else
            head = head.next;
    }
    
    return dummy.next;
};

const reverse = (begin, end) => {
    let cur = begin.next;
    let prev = begin;
    let first = cur;
    
    while (cur !== end) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    
    begin.next = prev;
    first.next = cur;
    return first;
};
