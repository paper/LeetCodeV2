/**
 * Created by paper on 15/7/23.
 * 
 * Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * 
 * Given a linked list, 
 * remove the nth node from the end of list and return its head. [ end!!!! by paper ]
 * 
 * For example:
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 * 
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!head) return head;
  
  function getListLen(head){
    var len = 1;

    while(head.next){
      head = head.next;
      len++;
    }

    return len;
  }

  var head2 = head;
  var len = getListLen(head2);

  //  从前开始算，从0开始
  var n2 = len - n;

  var start = head;
  var next = head.next;
  var i = 1;

  if( n2 === 0) return head.next;

  while(i < n2){
    head = next;
    next = head.next;

    i++;
  }

  head.next = next ? next.next : null;

  return start;
};