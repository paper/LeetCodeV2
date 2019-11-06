/**

    Created by paper on 15/7/31.

    Lowest Common Ancestor of a Binary Search Tree 
    https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
     
    Given a binary search tree (BST), 
    find the lowest common ancestor (LCA) of two given nodes in the BST.

    According to the definition of LCA on Wikipedia: 
    “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants 
    (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
    /     \        /      \
    0     4       7       9
         /  \
         3   5

    For example, 
    the lowest common ancestor (LCA) of nodes 2 and 8 is 6. 
    Another example is LCA of nodes 2 and 4 is 2, 
    since a node can be a descendant of itself according to the LCA definition.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 通用的接法，不用关系这个tree数值直接的关系
var lowestCommonAncestor_1 = function(root, p, q) {
    if(!root) return root;
    if(p.val === q.val ) return p;

    function Walk(){
        this.stopStatus = false;
    }

    Walk.prototype.go = function(root, cb){
        if(this.stopStatus === true || root === null) return;
        
        var left = root.left;
        var right = root.right;

        cb(root, left);
        cb(root, right);
        
        this.go(left, cb);
        this.go(right, cb);
    };

    Walk.prototype.stop = function(){
        this.stopStatus = true;
    };

    var r = [];
    r[root.val] = "" + root.val;

    var walk1 = new Walk();

    // 存储p和q节点到root节点的值，用逗号分割
    walk1.go(root, function(root, node){
        // 如果2个p和q节点到root节点都找到了“路线”，则停止查找
        if( r[p.val] && r[q.val] ){
            walk1.stop();
        }

        if(node){
            r[node.val] = r[root.val] + "," + node.val;
        }
    });

    // p 和 q 节点到root节点的值，并转成数组
    var sp = r[p.val].split(",");
    var sq = r[q.val].split(",");
    var i = 0;
    var len = Math.min(sp.length, sq.length);
    var v;
    var ret;

    // 选择p和q，最近的相交节点值
    while(i < len){
        if( sp[i] === sq[i] ){
            v = +sp[i];
        }
        
        i++;
    }

    var walk2 = new Walk();

    // 根据最近相交节点值，找到对应的TreeNode
    walk2.go(root, function(root, node){
        if(root.val === v){
            ret = root;
            walk2.stop();
        }
    });

    return ret;
};

// 利用这个tree数值的关系，可以快速进行判断
var lowestCommonAncestor_2 = function(root, p, q) {
    if(!root) return root;
    if(p.val === q.val ) return p;

    function walk(root, p, q){
        // root如果都大于pq两节点的值，说明pq都在root的左边
        if( root.val > p.val && root.val > q.val ){
            return walk(root.left, p, q);
        }
        // 同理，pq在root的右边
        else if(root.val < p.val && root.val < q.val){
            return walk(root.right, p, q);
        }
        // 如果互相分开，那么最近的父亲，就肯定是root了
        else{
            return root;
        }
    }

    return walk(root, p, q);
};
