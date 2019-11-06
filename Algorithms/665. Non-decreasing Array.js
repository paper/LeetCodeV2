/**
 * Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
 * 
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 * 
 * Example 1:
 * Input: [4,2,3]
 * Output: True
 * Explanation: You could modify the first
 * 4
 * to
 * 1
 * to get a non-decreasing array.
 * Example 2:
 * Input: [4,2,1]
 * Output: False
 * Explanation: You can't get a non-decreasing array by modify at most one element.
 * Note: The n belongs to [1, 10,000].
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var chance = 1;
    var len = nums.length;
    
    if( len <= 2 ) {
        return true;
    }
    
    for(var i=1; i<len; i++) {
        var prev = nums[i-1];
        var cur  = nums[i];
        
        if( prev > cur ) {
            if( chance === 0 ) {
                return false
            }
            
            chance -= 1;
            
            var prevCanChange = false;
            var curCanChange = false;
            
            // 看pre的值能不能改变的小一点
            if( nums[i-2] === undefined || nums[i-2] <= cur ) {
                prevCanChange = true;
            }
            
            // 如果pre不能更小，就看看cur能不能大些
            if( !prevCanChange ) {
                if( nums[i+1] === undefined || nums[i+1] >= prev) {
                    curCanChange = true;
                }
            }
            
            if( prevCanChange === false &&  curCanChange === false ) {
                return false;
            }
        }
    }
    
    return true;
};


