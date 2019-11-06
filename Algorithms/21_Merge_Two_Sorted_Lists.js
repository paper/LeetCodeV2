/**
    Created by paper on 15/10/17.

    Merge Two Sorted Lists
    https://leetcode.com/problems/merge-two-sorted-lists/

    Merge two sorted linked lists and return it as a new list.
    The new list should be made by splicing together the nodes of the first two lists.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    var small;
    var big;

    if (l1.val <= l2.val) {
        small = l1;
        big = l2;
    } else {
        small = l2;
        big = l1;
    }

    var ret = small;

    var prevSmall = null;
    var prevBig = null;

    while(true){
        if (small === null) {
            if (prevSmall) {
                prevSmall.next = big;
            }

            break;
        }

        if (big === null) {
            if (prevBig) {
                prevBig.next = small;
            }

            break;
        }

        if (small.val <= big.val) {
            if(prevBig) {
                prevBig.next = small;
                prevBig = null;
            }

            prevSmall = small;
            small = small.next;
        } else {
            if(prevSmall) {
                prevSmall.next = big;
                prevSmall = null;
            }

            prevBig = big;
            big = big.next;
        }

    }//end while

    return ret;

};
