/**
    Created by paper on 15/9/29.

    Minimum Depth of Binary Tree
    https://leetcode.com/problems/minimum-depth-of-binary-tree/

    Given a binary tree, find its minimum depth.

    The minimum depth is the number of nodes along the shortest path 
    from the root node down to the nearest leaf node.
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
var minDepth = function(root) {
    if(!root) return 0;
    
    var deep = 0;
    
    // 广度遍历
    function walk(TreeNodes){
        var r = [];
        var len = TreeNodes.length;
        
        if (len === 0 ) return;
        
        var node;
        var left;
        var right;
        
        for(var i=0; i<len; i++) {
            node = TreeNodes[i];
            
            left  = node.left;
            right = node.right;
            
            if(left === null && right === null) {
                deep++;
                return;
            }
            
            if (left !== null) {
                r.push(left);
            }
            
            if (right !== null) {
                r.push(right);
            }
        }
        
        deep++;
        walk(r);
    }
    
    walk([root]);
    
    return deep;
};

