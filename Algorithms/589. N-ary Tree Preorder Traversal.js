/**
 * 589. N叉树的前序遍历
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 * Created by paper on 2019-05-06
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  var ret = [];
  
  walk(root);
  
  return ret;
  
  function walk(root) {
    if(!root) {
      return;
    }
    
    var val = root.val;
    var children = root.children;
    
    ret.push(val);
    
    children.forEach((node)=>{
      walk(node);
    })
  };
  
};