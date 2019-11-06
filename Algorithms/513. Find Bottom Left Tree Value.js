/**
 * Given a binary tree, find the leftmost value in the last row of the tree.
 *
 * Example 1:
 * Input:
 *
 *   2
 *  / \
 * 1   3
 *
 * Output: 1
 * 
 * Example 2:
 * Input:
 *
 *     1 
 *    / \
 *   2   3
 *   /   / \
 * 4   5   6
 *    /
 *   7
 *
 * Output:7
 * 
 * Note: You may assume the tree (i.e., the given root node) is not NULL.
 * */

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
var findBottomLeftValue = function(root) {
    var ret = 0;

    function walk(roots) {
        var nextRoots = [];

        for(var i=0; i<roots.length; i++) {
            var root = roots[i];

            if( root.left ) {
                nextRoots.push(root.left);
            }

            if( root.right ) {
                nextRoots.push(root.right);
            }
        }

        if( nextRoots.length === 0 ) {
            ret = roots[0].val;
        }else{
            walk(nextRoots);
        }
    }

    walk([root]);

    return ret;
};
