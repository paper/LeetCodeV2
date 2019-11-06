/**
 * Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
 * 
 * Example 1:
 * Input:
 *   3
 *  / \
 * 9  20
 *  /  \
 * 15   7
 * Output: [3, 14.5, 11]
 * Explanation:
 * The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
 * Note:
 * The range of node's value is in the range of 32-bit signed integer.
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
var averageOfLevels = function(root) {
    var ret = [];
    
    function walk(nodes) {
        var len = nodes.length;
        
        if( len === 0 ) return;
        
        var sum = 0;
        var newNodes = [];
        
        nodes.forEach(function (node) {
            sum += node.val;
            
            if( node.left ){
                newNodes.push(node.left)
            }
            
            if( node.right ){
                newNodes.push(node.right)
            }
        })
        
        ret.push( sum/len );
        
        walk(newNodes);
    }
    
    walk([root]);
    
    return ret;
};

