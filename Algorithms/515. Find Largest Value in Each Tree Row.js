/**
 * You need to find the largest value in each row of a binary tree.
 *
 * Example:
 * Input:
 *
 *     1
 *    / \
 *   3   2
 *  / \   \
 * 5   3   9
 *
 * Output: [1, 3, 9]
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
 */
var largestValues = function(root) {
    var ret = [];

    if( !root ) return ret;

    var MIN = -Number.MAX_VALUE;

    function walk(roots) {
        var nextRoots = [];
        var max = MIN;
        var len = roots.length;

        for(var i=0; i<len; i++) {
            var root = roots[i];

            max = Math.max(max, root.val);

            if( root.left ) {
                nextRoots.push(root.left);
            }

            if( root.right ) {
                nextRoots.push(root.right);
            }
        }

        if( max > MIN ) {
            ret.push(max);
        }

        if(nextRoots.length > 0) {
            walk(nextRoots);
        }
    }

    walk([root]);

    return ret;
};


