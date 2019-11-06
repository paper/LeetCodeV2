/**
 * Given two non-empty binary trees s and t, 
 * check whether tree t has exactly the same structure and node values with a subtree of s. 
 * A subtree of s is a tree consists of a node in s and all of this node's descendants. 
 * The tree s could also be considered as a subtree of itself.
 *
 * Example 1:
 * Given tree s:
 *
 *     3
 *    / \
 *   4   5
 *  / \
 * 1   2
 * Given tree t:
 *   4
 *  / \
 * 1   2
 * Return true, because t has the same structure and node values with a subtree of s.
 * Example 2:
 * Given tree s:
 *
 *     3
 *    / \
 *   4   5
 *  / \
 * 1   2
 *    /
 *   0
 * Given tree t:
 *   4
 *  / \
 * 1   2
 * Return false.
 * Subscribe to see which companies asked this question.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  var find = false;

  walk(s);

  return find;

  // 递归判断，s的子树是不是和t一样
  function walk(tree) {
    if( find ) return;

    if( check(tree, t) ) {
      find = true;
    }else{
      if( tree ) {
        walk(tree.left, t);
        walk(tree.right, t);
      }
    }
  }

  // 对比2个树是不是一模一样
  function check(tree1, tree2) {

    var isSame = true;

    function checkWalk(t1, t2) {
      if( !isSame ) {
        return;
      }

      if( !t1 && !t2 ) {
        return;
      }

      var v1, v2;

      if( t1 ) {
        v1 = t1.val;
      }

      if( t2 ) {
        v2 = t2.val;
      }

      if( v1 !== v2 ) {
        isSame = false;
      }

      if( t1 && t2 ) {
        checkWalk(t1.left, t2.left);
        checkWalk(t1.right, t2.right);
      }
    }

    checkWalk(tree1, tree2);

    return isSame;
  }
};


