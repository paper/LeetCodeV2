/**
 * Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
 *
 * Example:
 *
 * Input:
 *
 *  1
 *   \
 *   3
 *  /
 * 2
 *
 * Output:
 * 1
 *
 * Explanation:
 * The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 * Note: There are at least two nodes in this BST.
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
var getMinimumDifference = function(root) {
    var ret = Number.MAX_VALUE;
    var min = Math.min;
    var abs = Math.abs;

    deepWalk(root);

    return ret;

    function deepWalk(root) {
        if( ret === 1 ) return;

        getMin(root);

        if(root.left) {
            deepWalk(root.left);
        }

        if(root.right) {
            deepWalk(root.right);
        }
    }

    function getMin(root) {
        var left = root.left;
        var right = root.right;
        var val = root.val;

        if( left ) {
            walkRight(val, left);
        }

        if( right ) {
            walkLeft(val, right);
        }
    }

    function walkRight(val, node) {
        if( ret === 1 ) return;

        ret = min(ret, abs(node.val - val));

        if( node.right ) {
            walkRight(val, node.right);
        }
    }

    function walkLeft(val, node) {
        if( ret === 1 ) return;

        ret = min(ret, abs(node.val - val));

        if( node.left ) {
            walkLeft(val, node.left);
        }
    }
};


