/**
 * Created by paper on 2016/8/22.
 * 
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
 */

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
var swapPairs = function(head) {
    if(!head || head.next === null) {
        return head;
    }

    var p1 = head;
    var change = false;
    var curVal, nextVal;

    while(p1) {
        if( !p1.next ) {
            break;
        }

        if( !change ) {
            change = true;

            curVal  = p1.val;
            nextVal = p1.next.val;

            p1.next.val = curVal;
            p1.val = nextVal;
        } else {
            change = false;
        }

        p1 = p1.next;
    }

    return head;
};