/**
    Created by paper on 15/8/3.

    Remove Linked List Elements
    https://leetcode.com/problems/remove-linked-list-elements/

    Remove all elements from a linked list of integers that have value val.

    Example
    Given:  1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
    Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    
    while(head && head.val === val){
        head = head.next;
    }
    
    var start = head;
    
    while(start && start.next){
        if( start.next.val === val ){
            start.next = start.next.next;
        }else{
            start = start.next;    
        }
    }
    
    return head;
};
