/**
 * Created by paper on 2016/9/9.
 * 
 * Given an array of integers that is already sorted in ascending order, 
 * find two numbers such that they add up to a specific target number.
 * 
 * The function twoSum should return indices of the two numbers such that they add up to the target, 
 * where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 * 
 * You may assume that each input would have exactly one solution.
 * 
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var len = numbers.length;

    // 如果某个key值，在后续的数组中是永远找不到的，记录下来
    // 这样的话，遇到一样的key，就可以直接跳过了
    var cache = [];
    var key;

    for(var i=0; i<len; i++) {
        key = target - numbers[i];

        if( cache[key] === true ) {
            continue;
        }

        var tempArr = numbers.slice(i+1);
        var index = binaryFind(key, tempArr, 0, tempArr.length - 1);

        if( index !== -1 ) {
            return [i+1, (index+i+1)+1];
        } else {
            cache[key] = true;
        }
    }

    /**
     * 二分查找k，在有序的数组r中
     * @param {number} key
     * @param {number[]} r
     * @return {number} 找到就返回key在r中的下标，没找到返回 -1
     */
    function binaryFind(key, r, left, right) {
        if( r[left]  === key ) return left;
        if( r[right] === key ) return right;

        if( left+1 === right ) return -1;

        var mid = Math.floor( (left + right)/2 );
        var mid_value = r[mid];

        if( mid_value === key ) {
            return mid;
        }

        if( mid_value > key ) {
            return binaryFind(key, r, left, mid);
        } else {
            return binaryFind(key, r, mid, right);
        }
    }
};
