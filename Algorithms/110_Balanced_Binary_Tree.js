/**
    Created by paper on 15/8/24.

    Balanced Binary Tree
    https://leetcode.com/problems/balanced-binary-tree/

    Given a binary tree, determine if it is height-balanced.

    For this problem, 
    a height-balanced binary tree is defined as a binary tree in 
    which the depth of the two subtrees of every node never differ by more than 1. 

    --------------------------------------------------------------------

    Submission Details
    226 / 226 test cases passed.    Status: Accepted
    Runtime: 160 ms                 Submitted: 0 minutes ago

    You are here!
    Your runtime beats 100.00% of javascript coders. (哦耶！)
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    
    var ret = true;
    
    function walk(root){
        if(!ret) return;
        if(!root) return 0;
        
        var left_h = walk(root.left);
        var right_h = walk(root.right);
        
        if(Math.abs(left_h - right_h) > 1) {
            ret = false;
        }
        
        return Math.max(left_h, right_h) + 1;
    }
    
    walk(root);
    
    return ret;
};

