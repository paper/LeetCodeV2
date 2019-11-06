/**
 * Created by paper on 2016/9/8.
 * 
 * Reverse a linked list from position m to n. Do it in-place and in one-pass.
 * 
 * For example:
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 * 
 * return 1->4->3->2->5->NULL.
 * 
 * Note:
 * Given m, n satisfy the following condition:
 * 1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(!head || m === n) return head;

    var i = 1;
    var p = head;

    var node_m = null; // m位置节点
    var node_m_prev = null; //m-1位置节点

    var node_n = null; // n位置节点
    var node_n_next = null; // n-1位置节点

    var node_temp_prev = null;
    var node_temp_next = null;

    while(p) {
        if( i === m - 1 ) {
            node_m_prev = p;
        }

        if( i === m ) {
            node_m = p;
            node_temp_prev = p;
        }

        if( i === n ) {
            node_n = p;
        }

        if( i === n + 1 ) {
            node_n_next = p;
        }

        if( i > m && i <= n) {
            node_temp_next = p.next; // 先把当前p的next临时存储起来

            p.next = node_temp_prev; // 把p的指针指向 之前 的那个
            node_temp_prev = p; // 把p临时存储到 node_temp_prev 中

            p = node_temp_next; // 更新 p 的值
        } else {
            p = p.next;
        }

        i++;
    }

    if( node_m_prev ) {
        node_m_prev.next = node_n;
    } else {
        head = node_n;
    }

    node_m.next = node_n_next;

    return head;
};
