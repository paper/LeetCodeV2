/**
 * Created by paper on 2016/7/15.
 * 
 * Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
 * 
 * You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
 * 
 * Example:
 *  Given 1->2->3->4->5->NULL,
 *  return 1->3->5->2->4->NULL.
 * 
 * Note:
 *  The relative order inside both the even and odd groups should remain as it was in the input.
 *  The first node is considered odd, the second node even and so on ...
 * */

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
var oddEvenList = function(head) {
    // 当单链表为空，1个值，和2个值时，顺序不变
    if(!head || head.next ===  null || head.next.next === null){
        return head;
    }

    var odd_head = head;
    var odd_go   = head;

    var even_head = head.next;
    var even_go   = head.next;

    var walk = head.next.next;
    var i = 3;

    while(walk) {
        if(i%2 === 0) {
            even_go.next = walk;
            even_go = even_go.next;
        }else{
            odd_go.next = walk;
            odd_go = odd_go.next;
        }

        walk = walk.next;
        i++;
    }

    i%2 === 0 ?  even_go.next = null : odd_go.next = null;

    odd_go.next = even_head;

    return odd_head;
};