/**
 * Created by paper on 2016/9/8.
 * 
 * Given a linked list, determine if it has a cycle in it.
 * 
 * Follow up:
 * Can you solve it without using extra space?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var ret = false;
    if(!head) return ret;

    var point_walk_1 = head; // 1步1步走
    var point_walk_2 = head; // 2步2步走

    while(point_walk_1 && point_walk_2) {
        point_walk_1 = point_walk_1.next;

        if( point_walk_2.next ) {
            point_walk_2 = point_walk_2.next.next;
        } else {
            break;
        }

        if( point_walk_1 === point_walk_2 ) {
            ret = true;
            break;
        }
    }

    return ret;
};