/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 *
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 *
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var len = nums.length;

    if( len === 0 ) return -1;
    if( len === 1 ) return nums[0] === target ? 0 : -1;

    var leftNum = nums[0];
    var rightNum = nums[len-1];

    if( target === leftNum ) return 0;
    if( target === rightNum ) return len-1;

    if( target > leftNum && target < rightNum ) {
        return findByBinarySearch(nums, 0, len-1, target);
    }

    if( target < leftNum && target > rightNum ) {
        return -1;
    }

    // 是否进入正常的2分搜索
    var normalSearch = false;

    if( target > leftNum && target > rightNum ) {
        return findByBinarySearch(nums, 0, len-1, target, function (left, mid, right) {

            if( normalSearch ) {
                return mid < target;
            }

            // 进入正常的2分查找
            if( mid > target ) {
                normalSearch = true;
                return false;
            }

            if( mid < target && mid > left ) {
                return true;
            }

            if( mid < target && mid < left ) {
                return false;
            }
        });
    }

    if( target < leftNum && target < rightNum ) {

        return findByBinarySearch(nums, 0, len-1, target, function (left, mid, right) {
            if( normalSearch ) {
                return mid < target;
            }

            // 进入正常的2分查找
            if( mid < target ) {
                normalSearch = true;
                return true;
            }

            if( mid > target && mid > left ) {
                return true;
            }

            if( mid > target && mid < left ) {
                return false;
            }

        });
    }

    function findByBinarySearch(nums, left, right, target, callback) {
        var len = nums.length;

        if (len === 0) return -1;
        if (left > right) return -1;

        while (left <= right) {
            if (nums[left] === target) {
                return left;
            }

            if (nums[right] === target) {
                return right;
            }

            var mid = Math.floor((left + right) / 2);

            if (mid === left || mid === right) {
                return -1;
            }

            if (nums[mid] === target) {
                return mid;
            }

            var temp = callback ? callback(nums[left], nums[mid], nums[right]) : nums[mid] < target;

            if( temp === true ) {
                left = mid;
            }else{
                right = mid;
            }

        }
    }
};


