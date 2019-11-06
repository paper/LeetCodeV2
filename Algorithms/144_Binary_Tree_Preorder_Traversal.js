/**
 * Created by paper on 2016/6/15.
 * 
 * Given a binary tree, return the preorder traversal of its nodes' values.
 *
 * For example:
 * Given binary tree {1,#,2,3},
 *  1
 *   \
 *    2
 *   /
 *  3
 *  return [1,2,3].
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
 * @return {number[]}
 * 
 * 常规递归写法
 * You are here! Your runtime beats 35.29% of javascriptsubmissions.
 */
var preorderTraversal_1 = function(root) {
    if( !root ) return [];
    
    var ret = [];
    
    function walk(root){
        ret.push(root.val);

        if( root.left ){
            walk(root.left);
        }
        
        if( root.right ){
            walk(root.right);
        }
    }
    
    walk(root);

    return ret;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * 优化写法
 * You are here! Your runtime beats 71.57% of javascriptsubmissions.
 * 
 * 自己创建一个堆栈，来维护要回退时需要判断的节点
 */
var preorderTraversal_2 = function(root) {
    if( !root ) return [];

    var ret = [];
    var checkList = [];

    while(true){
        ret.push(root.val);

        if( root.left === null && root.right === null ){
            if( checkList.length === 0 ){
                break;
            }

            var node = checkList.pop();
            root = node.right;
            continue;
        }

        if( root.left && root.right ){
            checkList.push(root);
        }

        root = root.left ? root.left : root.right;
    }

    return ret;
};

