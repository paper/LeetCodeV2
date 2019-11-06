/**
 * Created by paper on 15/7/23.
 * 
 * Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 * 
 * Implement the following operations of a queue using stacks.
 * 
 * 1) push(x) --  Push element x to the back of queue.
 * 2) pop()   --  Removes the element from in front of queue.
 * 3) peek()  --  Get the front element.
 * 4) empty() --  Return whether the queue is empty.
 * 
 * Notes:
 * 1) You must use only standard operations of a stack -- which means 
 * only push to top, peek/pop from top, size, and is empty operations are valid.
 * 
 * 2) Depending on your language, stack may not be supported natively. 
 * You may simulate a stack by using a list or deque (double-ended queue), 
 * as long as you use only standard operations of a stack.
 * 
 * 3) You may assume that all operations are valid 
 * (for example, no pop or peek operations will be called on an empty queue).
 */

/**
 * @constructor
 */
var Queue = function() {
  this.r = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.r.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  this.r.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  return this.r[ 0 ];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.r.length === 0;
};