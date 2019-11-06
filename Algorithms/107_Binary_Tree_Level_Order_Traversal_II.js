/**
 *  Created by paper on 16/1/17.
 * 
 *  107. Binary Tree Level Order Traversal II
 *  https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 *  
 *  Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
 *  (ie, from left to right, level by level from leaf to root).
 *  
 *  For example:
 *  Given binary tree {3,9,20,#,#,15,7},
 *  
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 *          
 *  return its bottom-up level order traversal as:
 *  [
 *   [15,7],
 *   [9,20],
 *   [3]
 *  ]
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
var levelOrderBottom = function(root) {
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
    
    return ret.reverse();
};

