/**
 * Created by paper on 15/7/27.
 * 
 * Min Stack
 * https://leetcode.com/problems/min-stack/
 * 
 * Design a stack that supports push, pop, top, and 
 * retrieving the minimum element in constant time.
 * 
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 */

/**
 * @constructor
 */
var MinStack = function() {
  this.r = [];

  this.min;
  this.min_index;
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  this.r.push(x);

  if( this.min === undefined || x < this.min){
    this.min = x;
    this.min_index = this.r.length - 1;
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  this.r.pop();

  // 说明之前pop的是this.min
  if( this.r.length === this.min_index ){
    if( this.r.length === 0 ){
      this.min = undefined;
      this.min_index = undefined;
      return;
    }else{
      var min = this.r[0];
      var index = 0;

      for(var i = 1, len = this.r.length; i<len; i++){
        if( this.r[i] < min ){
          min = this.r[i];
          index = i;
        }
      }

      this.min = min;
      this.min_index = index;
    }
  }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  if(this.r.length === 0) return;
  return this.r[this.r.length-1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  if(this.r.length === 0) return;

  return this.min;
};