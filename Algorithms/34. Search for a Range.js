/**
 * Given an array of integers sorted in ascending order,
 * find the starting and * ending position of a given target value.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 *
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    var len = nums.length;

    if (len === 0) {
        return [-1, -1];
    }

    var findMid = findByBinarySearch(nums, 0, len - 1, target);
    if (findMid === -1) {
        return [-1, -1];
    }

    var leftIndex = findLeftByBinarySearch(nums, findMid, target);
    var rightIndex = findRightByBinarySearch(nums, findMid, target);

    return [leftIndex, rightIndex];

    function findByBinarySearch(nums, left, right, target) {
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

            if (nums[mid] < target) {
                left = mid;
            } else {
                right = mid;
            }
        }
    };


    function findLeftByBinarySearch(nums, mid, target) {
        var index = findByBinarySearch(nums, 0, mid - 1, target);
        if (index === -1) {
            return mid;
        }

        // 如果找到了，继续向左找
        return findLeftByBinarySearch(nums, index, target);
    };

    function findRightByBinarySearch(nums, mid, target) {
        var index = findByBinarySearch(nums, mid + 1, len - 1, target);

        if (index === -1) {
            return mid;
        }

        // 如果找到了，继续向左找
        return findRightByBinarySearch(nums, index, target);
    };
};