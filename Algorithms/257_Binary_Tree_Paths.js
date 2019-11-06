/**
 *  Created by paper on 15/12/10.
 * 
 *  Binary Tree Paths
 *  https://leetcode.com/problems/binary-tree-paths/
 * 
 *   Given a binary tree, return all root-to-leaf paths.
 *   For example, given the following binary tree:
 *   
 *     1
 *   /   \
 *   2     3
 *    \
 *     5
 *   
 *   All root-to-leaf paths are:
 *   
 *   ["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root){ 
        return []; 
    }
    
    var r = [root.val];
    var result = [];
    
    function walk(r, root){
        
        if( root.left ) {
            var leftR = r.concat();
            leftR.push(root.left.val);
            walk(leftR, root.left);
        }
        
        if( root.right ) {
            var rightR = r.concat();
            rightR.push(root.right.val);
            walk(rightR, root.right);
        }
        
        if (root.left === null && root.right === null) {
            result.push(r);
        }
        
    }
    
    if(root.left === null && root.right === null) {
        return [ r[0] + "" ];
    } else {
        walk(r, root);
        
        result.forEach(function(v, i){
           result[i] = v.join("->");
        });

        return result;
    }
};