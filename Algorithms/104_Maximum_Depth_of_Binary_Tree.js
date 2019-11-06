/**
    Created by paper on 15/8/24.

    Maximum Depth of Binary Tree
    https://leetcode.com/problems/maximum-depth-of-binary-tree/

    Given a binary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path 
    from the root node down to the farthest leaf node.

    --------------------------------------------------------------------

    Submission Details
    38 / 38 test cases passed.    Status: Accepted
    Runtime: 128 ms               Submitted: 0 minutes ago

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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    
    root.dep = 1;
    
    var dep = 1;
    var max = Math.max;
    var left, right;

    function walk(root){
        left = root.left;
        if(left !== null){
            left.dep = root.dep + 1;
            dep = max(dep, left.dep);
            walk(left);
        }
        
        right = root.right;
        if(right !== null){
            right.dep = root.dep + 1;
            dep = max(dep, right.dep);
            walk(right);
        }
    }
    
    walk(root);
    
    return dep;
};

