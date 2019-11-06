/**
 * Created by paper on 15/7/26.
 * 
 * Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 * 
 * Invert a binary tree.
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 
 * to
 * 
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 * 
 * 
 * Trivia:
 * This problem was inspired by this original tweet by Max Howell:
 *    Google: 90% of our engineers use the software you wrote (Homebrew), 
 *    but you can’t invert a binary tree on a whiteboard so fuck off.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;

  function invert(root) {

    var temp_right = root.right;

    root.right = root.left;
    root.left = temp_right;

    if(root.left) invert(root.left);
    if(root.right) invert(root.right);

  }

  invert(root);

  return root;
};