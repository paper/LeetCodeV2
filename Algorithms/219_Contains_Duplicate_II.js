/**
 * Created by paper on 2016/9/9.
 * 
 * Given an array of integers and an integer k, 
 * find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and 
 * the difference between i and j is at most k.
 */

/**
 * @param {number[]} nums
 * @param {number} k 它们坐标差不能超过k，即 j - i <= k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var len = nums.length;

    if(len <= 1 || k === 0) return false;

    // 记录nums的数字相同的数的位置集合
    var cache = {};

    nums.forEach(function(n, i){
        var key = n + '';

        if( cache[key] ) {
            cache[key].push(i);
        }else{
            cache[key] = [i];
        }
    });

    for(var i in cache) {
        var r = cache[i];

        if( r.length >= 2 && checkDistinct(k, r)) {
            return true;
        }
    }

    return false;

    /**
     * 判断r里面是不是含有两个相差等于k的值
     * @param {number} k 2个数字直接相差的距离
     * @param {number[]} r 具有相同数字的不同位置集合(而且是有序的)
     * @return {Boolean}
     */
    function checkDistinct(k, r) {
        var len = r.length;
        if(len <= 1) return false;
        if(len === 2) return r[1] - r[0] <= k;

        var vi, vj, i, j;

        for(i = 0; i<len; i++) {
            for(j = i+1; j<len; j++) {
                vj = r[j];
                vi = r[i];

                if( vj - vi <= k ) {
                    return true;
                } else { // 如果当前的vj大于vi，说后面的vj会更大，应当立即结束
                    break;
                }
            }
        }

        return false;
    }
};
