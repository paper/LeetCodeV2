/**
 * Created by paper on 15/7/23.
 * 
 * Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * 
 * Given a sorted linked list,
 * delete all duplicates such that each element appear only once.
 * 
 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head) return head;

  var start = new ListNode(0);
  start.next = head;

  var next = head.next;

  while(next){

    if( next.val != head.val ){
      head = next;
      next = head.next;
    }else{
      next = next.next;
      head.next = next;
    }

  }

  return start.next;
};