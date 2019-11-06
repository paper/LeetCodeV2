/**
 * Created by paper on 15/7/23.
 * 
 * Path Sum
 * https://leetcode.com/problems/path-sum/
 * 
 * Given a binary tree and a sum, 
 * determine if the tree has a root-to-leaf path 
 * such that adding up all the values along the path equals the given sum.
 * 
 * For example:
 * Given the below binary tree and sum = 22,
 * 
 *       5
 *      / \
 *     4   8
 *    /   / \
 *   11  13  4
 *  / \      \
 * 7   2      1
 * 
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root) return false;

  var ret = false;

  function walkLeft(root){
    if( root.left ){
      var left = root.left;
      left.sum = left.val + root.sum;
      root = left;

      walk(root);
    }
  }

  function walkRight(root){
    if( root.right ){
      var right = root.right;
      right.sum = right.val + root.sum;
      root = right;

      walk(root);
    }
  }

  function walk(root){
    if( root.sum === undefined ){
      root.sum = root.val;
    }

    if( root.left === null && root.right === null && root.sum === sum){
      ret = true;
      return;
    }

    walkLeft(root);
    walkRight(root);
  }//end walk

  walk(root);

  return ret;
};