/**
 * Created by paper on 15/7/29.
 * 
 * Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/
 * 
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 * 
 * 题目认为 null 也是回文（这也是醉了）
 * 1）第一种算法使用了 O(n)时间 和 O(n)空间，但更通俗易懂，而且还不影响原列表
 * 2）第二种算法，虽然使用了更少的空间(时间是差不多的)，但比较晦涩，最重要的一点是修改了原来的列表
 */
var isPalindrome_1 = function(head) {
	if(!head || head.next === null) return true;

	var s1 = "";
	var s2 = "";

	s1 = s2 = "" + head.val;

	while(head.next){
		s1 = s1 + head.next.val;
		s2 = head.next.val + s2;

		head = head.next;
	}

	return s1 === s2;
};


var isPalindrome_2 = function(head) {
	if(!head || head.next === null) return true;

	var slow = head;
	var fast = head;

	// slow 就指向了head的一半
	while(fast && fast.next && fast.next.next){
		slow = slow.next;
    fast = fast.next.next;
	}

	var head2 = slow.next;
	slow.next = null;

	var prev = null;
	var next = null;
	var cur = head2;

	// 反转后一半的列表，但这会影响整个列表
	while(head2) {
    next = head2.next;
    head2.next = prev;
    prev = head2;
    head2 = next;
	}

	// 一个一个对比即可
	head2 = prev;
	while(head && head2) {
    if(head.val != head2.val)
      return false;

    head = head.next;
    head2 = head2.next;
	}

	return true;
};
