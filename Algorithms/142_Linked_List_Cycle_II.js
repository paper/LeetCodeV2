/**
 * Created by paper on 2016/9/8.
 * 
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 * 
 * Note: Do not modify the linked list.
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return head;

    var ret = null;

    var point_walk_1 = head; // 1步1步走
    var point_walk_2 = head; // 2步2步走

    var begin = head;

    while(point_walk_1 && point_walk_2) {
        point_walk_1 = point_walk_1.next;

        if( point_walk_2.next ) {
            point_walk_2 = point_walk_2.next.next;
        } else {
            break;
        }

        // cycle
        if( point_walk_1 === point_walk_2 ) {

            // 说明开头就是结尾
            if( point_walk_1 === head ) {
                ret = head;
            } else {
                // 说明循环的开头在单链的某个节点
                // point_walk_1 往前走1步，begin 往前走1步，
                // 它们重合的节点，就是那个开始循环的节点
                while(point_walk_1 && begin) {
                    var n1 = point_walk_1.next;
                    var n2 = begin.next;

                    if( n1 === n2 ) {
                        ret = n1;
                        break;
                    }

                    point_walk_1 = n1;
                    begin = n2;
                }
            }

            break;
        }
    }

    return ret;
};
