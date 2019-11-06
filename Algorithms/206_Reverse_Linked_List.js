/**
    Created by paper on 15/9/6.

    Reverse Linked List
    https://leetcode.com/problems/reverse-linked-list/

    Reverse a singly linked list.
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
var reverseList = function(head) {
    if(!head) return head;
    
    var prev = null;
    var next;
    var next2;
    
    while(head.next){
        next = head.next;
        next2 = next.next;
        
        head.next = prev;
        next.next = head;
        
        if(next2){
            prev = next;
            head = next2;
        }else{
            head = next;
            return head;
        }
    }
    
    head.next = prev;
    
    return head;
};

