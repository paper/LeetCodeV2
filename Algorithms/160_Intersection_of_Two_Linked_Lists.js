/**
    Created by paper on 15/9/6.

    Intersection of Two Linked Lists
    https://leetcode.com/problems/intersection-of-two-linked-lists/

    Write a program to find the node at which the intersection of two singly linked lists begins.

    For example, the following two linked lists:

    A:          a1 → a2
                       ↘
                         c1 → c2 → c3
                       ↗            
    B:     b1 → b2 → b3

    begin to intersect at node c1.

    Notes:
    1) If the two linked lists have no intersection at all, return null.
    2) The linked lists must retain their original structure after the function returns.
    3) You may assume there are no cycles anywhere in the entire linked structure.
    4) Your code should preferably run in O(n) time and use only O(1) memory.

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    
    var startA = headA;
    var startB = headB;
    
    function getLen(listNode){
        var len = 0;
        var cloneListNode = listNode;
        
        while(cloneListNode){
            len++;
            cloneListNode = cloneListNode.next;
        }
        return len;
    }
    
    var lenA = getLen(headA);
    var lenB = getLen(headB);
    
    while(lenA > lenB){
        startA = startA.next;
        lenA--;
    }
    
    while(lenA < lenB){
        startB = startB.next;
        lenB--;
    }
    
    while(startA != startB){
        startA = startA.next;
        startB = startB.next;
    }
    
    return startA;
};

