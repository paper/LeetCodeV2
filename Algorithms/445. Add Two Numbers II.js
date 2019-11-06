/**
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
 *
 * Example:
 *
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 * */

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
var addTwoNumbers = function(l1, l2) {
    var r1 = getVals(l1);
    var r2 = getVals(l2);

    var result = arrayAdd(r1, r2);

    var curNode = null;
    var node = null;

    for(var i=result.length - 1; i>=0; i--) {
        node = new ListNode(result[i]);
        node.next = curNode;

        curNode = node;
    }

    return node;

    function getVals(list) {
        var ret = [];
        var listCopy = list;

        while (listCopy) {
            ret.push(listCopy.val);
            listCopy = listCopy.next;
        }

        return ret;
    }

    function arrayAdd(r1, r2) {
        var ret = [];
        var carry = 0;

        for(var p1 = r1.length - 1, p2 = r2.length - 1; p1 >=0 || p2 >= 0; p1--, p2--) {
            var v1 = p1 >= 0 ? r1[p1] : 0;
            var v2 = p2 >= 0 ? r2[p2] : 0;

            var v3 = v1 + v2 + carry;

            if(v3 >= 10) {
                carry = parseInt(v3/10);
                ret.unshift(v3%10);
            }else{
                carry = 0;
                ret.unshift(v3);
            }
        }

        if( carry > 0 ) {
            ret.unshift(carry);
        }

        return ret;
    }
};
