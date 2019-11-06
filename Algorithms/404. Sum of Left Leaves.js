/**
 * Find the sum of all left leaves in a given binary tree.
 *
 * Example:
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
var sumOfLeftLeaves = function(root) {
    var ret = 0;

    if (!root) return ret;

    function walk(root) {
        if( root === null ) return;

        var left  = root.left;
        var right = root.right;

        if( left ) {
            if( left.left === null && left.right === null ) {
                ret += left.val;
            }else {
                walk(left);
            }
        }

        walk(right);
    }

    walk(root);

    return ret;
};


