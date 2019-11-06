/**
 *  Given a binary tree, determine if it is a valid binary search tree (BST).
 *
 * Assume a BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 *
 *   2
 *  / \
 * 1   3
 *
 * Binary tree [2,1,3], return true.
 *
 * Example 2:
 *
 *   1
 *  / \
 * 2   3
 *
 * Binary tree [1,2,3], return false.
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
var isValidBST = function(root) {
    if(!root) return true;
    if(root.left === null && root.right === null ) return true;

    var leftTreeRoot  = root.left;
    var rightTreeRoot = root.right;

    // 默认是有效的BST
    var ret = true;

    // 左树 所有的值都要小于 val
    function walkLeft(root) {
        if( ret === false || !root ) return;
        var val = root.val;

        walk(root.left, function (node) {
            if( node.val >= val ){
                ret = false;
            }
        });
    }

    // 右树 所有的值都要大于 val
    function walkRight(root) {
        if( ret === false || !root ) return;
        var val = root.val;

        walk(root.right, function (node) {
            if( node.val <= val ){
                ret = false;
            }
        });
    }

    function walk(root, callback) {
        if( ret === false || !root ) return;

        callback && callback(root);

        if(root.left){
            walk(root.left, callback);
        }

        if(root.right){
            walk(root.right, callback);
        }
    }


    // 每个"根"节点都需要判断判断
    walk(root, function (node) {
        walkLeft(node);
        walkRight(node);
    });

    return ret;
};

