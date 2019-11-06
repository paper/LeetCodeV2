/**
 * There are N gas stations along a circular route, where the amount of gas at station i is gas[i].
 *
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). 
 * You begin the journey with an empty tank at one of the gas stations.
 *
 * Return the starting gas station's index if you can travel around the circuit once, 
 * otherwise return -1.
 *
 * Note:
 * The solution is guaranteed to be unique.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var len = gas.length;

    if(len === 0) return -1;

    var end = {};

    for(var i=0; i<len; i++) {
        end = check(i);

        if( end.ret === 1 ) {
            return i;
        }else{
            // 如果从某个A点，走到B点，发现不行
            // 那么A-B之间所有的点都不能作为出发点
            // 这个很容易判断，如果gas[A] - cost[B] > 0 走到B还是不行，那么中间的点开始，就更不行了
            // 如果gas[A] - cost[B] = 0 走到B还是不行，那么从中间的点开始，也是不行了
            // 如果gas[A] - cost[B] < 0 ，就走不到B点了，立即不行了
            // 所以这里跳跃前进
            i = end.walk;
        }
    }

    return -1;

    function check(begin) {
        var index;
        var walk = begin;
        var diff = 0;

        do{
            // 因为数组是个“圆”，所以得求出真实的下标，但也保留真实的实际走过的路程
            index = walk%len;

            diff = gas[index] - cost[index] + diff;

            // 如果总的gas - cost小于零的话，那么没有解返回-1
            if( diff < 0 ) {
                return {
                    ret: -1,
                    walk: walk
                };
            }

            walk++;
        }while (walk%len !== begin);

        return {
            ret: 1
        };
    }
};


