/**
 * Created by paper on 15/7/24.
 * 
 * Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 * 
 * You are given two linked lists representing two non-negative numbers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
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
var addTwoNumbers = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;

  // 进位
  var carry = 0;

  var start = l1;

  while(l1.next || l2.next){

    l1.val += l2.val + carry;

    // 复位
    carry = 0;

    if( l1.val > 9 ){
      carry = 1;
      l1.val -= 10;
    }

    if(l1.next && l2.next){

      l1 = l1.next;
      l2 = l2.next;

    }else if(l1.next && l2.next === null){
      l1 = l1.next;
      l2.val = 0;
    }else if(l1.next === null && l2.next ){
      // l1的指针拐到l2去
      l1.next = l2.next;
      l1 = l1.next;

      l2.val = 0;
      l2.next = null;
    }

  }//end while

  l1.val += l2.val + carry;

  if( l1.val > 9 ){
    carry = 1;
    l1.val -= 10;

    l1.next = new ListNode(carry);
  }

  return start;
};