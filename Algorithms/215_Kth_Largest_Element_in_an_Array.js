/**
 * Created by paper on 2016/8/31.
 * 
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * 
 * For example,
 * Given [3,2,1,5,6,4] and k = 2, return 5.
 * 
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var len = nums.length;

    if( len === 0 ) return; // undefined
    if( len === 1 ) return nums[0];

    swap(nums, 0, parseInt( len * Math.random() ,10));

    var pick = nums[0];

    var left  = [];
    var right = [];

    for(var i=1; i<len; i++) {
        var temp = nums[i];

        if( temp > pick ){
            left.push(temp);
        }else{
            right.push(temp);
        }
    }

    // pick的位置，和k对比是从1开始算
    var pickIndex = left.length + 1;

    if( k === pickIndex ) {
        return pick;
    }

    if( k < pickIndex ) {
        return findKthLargest(left, k);
    }

    if( k > pickIndex ) {
        return findKthLargest(right, k - pickIndex);
    }
};

function swap(r, i, j) {
    var temp = r[i];
    r[i] = r[j];
    r[j] = temp;
}