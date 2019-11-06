/**
    Created by paper on 15/8/5.

    Same Tree
    https://leetcode.com/problems/same-tree/

    Given two binary trees, write a function to check if they are equal or not.

    Two binary trees are considered equal if they are structurally identical 
    and the nodes have the same value. 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 用同样的方式遍历2棵树，时刻判断当前进度的两棵树的值是否相等
// 一发现不同，立马退出
var isSameTree = function(p, q) {
    var ret = true;
    
    function check(p, q){
        if(!ret) return;

        if(!p && !q){
            return;
        }else if(p && q){
            
            if(p.val === q.val){
                check(p.left, q.left);
                check(p.right, q.right);
            }else{
                ret = false;
            }
            
        }else{
            ret = false;
        }
        
    }//end check
    
    check(p, q);
    
    return ret;
};
