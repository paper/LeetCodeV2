/**
 * Created by paper on 15/7/27.
 * 
 * Sum Root to Leaf Numbers
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 * 
 * Given a binary tree containing digits from 0-9 only, 
 * each root-to-leaf path could represent a number.
 * 
 * An example is the root-to-leaf path 1->2->3 which represents the number 123.
 * 
 * Find the total sum of all root-to-leaf numbers.
 * 
 * For example,
 *    1
 *   / \
 *  2   3
 * 
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 * 
 * Return the sum = 12 + 13 = 25.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if(!root) return 0;

  var sum = 0;

  root.s = "" + root.val;

  function fn(root){
    if( root.left === null && root.right === null ){
      sum += parseInt(root.s, 10);
      return;
    }

    if(root.left){
      root.left.s = "" + root.s + root.left.val;
      fn(root.left);
    }

    if(root.right){
      root.right.s = "" + root.s + root.right.val;
      fn(root.right);
    }
  }//end fn

  fn(root);

  return sum;
};