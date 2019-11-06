/**
    Created by paper on 15/9/21.

    Symmetric Tree
    https://leetcode.com/problems/symmetric-tree/

    Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

    For example, this binary tree is symmetric:

        1
       / \
      2   2
     / \ / \
    3  4 4  3

    But the following is not:

     1
    / \
    2   2
     \   \
      3    3

    Note:
    Bonus points if you could solve it both recursively and iteratively. 
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
var isSymmetric = function(root) {
    if (!root) return true;
    if (root.left === null && root.right === null) return true;
    
    var leftTreeRoot = root.left;
    var rightTreeRoot = root.right;
    
    var leftStr = leftTreeRoot ? leftTreeRoot.val + "" : "-";
    var rightStr = rightTreeRoot ? rightTreeRoot.val + "" : "-";
    
    function walkLeft(node) {
        if(node === null) return;

        var left = node.left;
        var right = node.right;
        
        var leftVal = left ? left.val + "" : "-";
        var rightVal = right ? right.val + "" : "-";
        
        leftStr += leftVal + rightVal;
        
        walkLeft(left);
        walkLeft(right);
    }
    
    function walkRight(node) {
        if(node === null) return;
        
        var left = node.left;
        var right = node.right;
        
        var leftVal = left ? left.val + "" : "-";
        var rightVal = right ? right.val + "" : "-";
        
        rightStr += rightVal + leftVal;
 
        walkRight(right);
        walkRight(left);
    }
    
    walkLeft(leftTreeRoot);
    walkRight(rightTreeRoot);
    
    return leftStr === rightStr;
};

