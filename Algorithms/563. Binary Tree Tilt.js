/**
 * Given a binary tree, return the tilt of the whole tree.
 *
 * The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values 
 * and the sum of all right subtree node values. Null node has tilt 0.
 *
 * The tilt of the whole tree is defined as the sum of all nodes' tilt.
 *
 * Example:
 *   Input:
 *      1
 *    /   \
 *   2     3
 *   Output: 1
 *   
 *   Explanation:
 *   Tilt of node 2 : 0
 *   Tilt of node 3 : 0
 *   Tilt of node 1 : |2-3| = 1
 *   Tilt of binary tree : 0 + 0 + 1 = 1
 * 
 * Note:
 *  The sum of node values in any subtree won't exceed the range of 32-bit integer.
 *  All the tilt values won't exceed the range of 32-bit integer.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    var tilt = 0;

    if(!root) return tilt;

    walkTree(root, function (node) {
        tilt += Math.abs( sum(node.left) - sum(node.right) );
    });

    return tilt;

    function walkTree(root, callback) {
        if(!root) {
            return;
        }

        callback && callback(root);

        walkTree(root.left, callback);
        walkTree(root.right, callback);
    }

    function sum(root) {
        var ret = 0;

        if(!root) return ret;

        walkTree(root, function (node) {
            ret += node.val;
        });

        return ret;
    }
};
