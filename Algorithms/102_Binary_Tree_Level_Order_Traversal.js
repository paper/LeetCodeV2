/**
    Created by paper on 15/9/28.

    Binary Tree Level Order Traversal
    https://leetcode.com/problems/binary-tree-level-order-traversal/

    Given a binary tree, return the level order traversal of its nodes' values. 
    (ie, from left to right, level by level).

    For example:
    Given binary tree {3,9,20,#,#,15,7},

        3
       / \
      9  20
        /  \
       15   7

    return its level order traversal as:

    [
      [3],
      [9,20],
      [15,7]
    ]

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    var ret = [];
    var h = 0;
    
    // 广度遍历
    function walk(TreeNodes, cb){
        var r = [];
        var len = TreeNodes.length;
        
        if (len === 0 ) return;
        
        var node;
        var left;
        var right;
        
        for(var i=0; i<len; i++) {
            node = TreeNodes[i];
            
            cb(node, h);
            
            left  = node.left;
            right = node.right;
            
            if (left !== null) {
                r.push(left);
            }
            
            if (right !== null) {
                r.push(right);
            }
        }
        
        h++;
        walk(r, cb);
    }
    
    walk([root], function(node, h){
        if (ret[h]){
            ret[h].push(node.val);
        }else{
            ret[h] = [node.val];
        }
    });
    
    return ret;
};

