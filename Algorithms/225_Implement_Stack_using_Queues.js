/**
 * Created by paper on 15/7/25.
 * 
 * Implement Stack using Queues
 * https://leetcode.com/problems/implement-stack-using-queues/
 * 
 * Implement the following operations of a stack using queues.
 * 
 * push(x) -- Push element x onto stack.
 * pop()   -- Removes the element on top of the stack.
 * top()   -- Get the top element.
 * empty() -- Return whether the stack is empty.
 * 
 * Notes:
 * You must use only standard operations of a queue -- which means only push to back, 
 * peek/pop from front, size, and is empty operations are valid.
 * 
 * Depending on your language, queue may not be supported natively. 
 * You may simulate a queue by using a list or deque (double-ended queue), 
 * as long as you use only standard operations of a queue.
 * 
 * You may assume that all operations are valid 
 * (for example, no pop or top operations will be called on an empty stack).
 */

/**
 * @constructor
 */
var Stack = function() {
  this.space = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  this.space.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  if(!this.empty()) this.space.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  if(this.empty()){
    return;
  }

  return this.space[this.space.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.space.length === 0;
};