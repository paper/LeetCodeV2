/**
    Created by paper on 15/9/14.

    Largest Number
    https://leetcode.com/problems/largest-number/

    Given a list of non negative integers, 
    arrange them such that they form the largest number.

    For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

    Note: The result may be very large, so you need to return a string instead of an integer. 
 */

// 234 -> [2,3,4]; 30 -> [3,0]
function numberToArray(num){
    if (num === 0) {
        return [0];
    }

    var r = [];

    while(num){
        r.unshift(num%10);
        num = Math.floor(num / 10);
    }

    return r;
}

// 如果a>b 返回 1
// a<b  返回 -1
// a == b  返回 0
function whoBig(a, b){
    if (a === b) return 0;

    var a_num = numberToArray(a);
    var b_num = numberToArray(b);

    var a_big = a_num.concat(b_num);
    var b_big = b_num.concat(a_num);

    var len = a_big.length;
    var i = 0;

    while(i < len) {
        if (a_big[i] > b_big[i]) return 1;
        if (a_big[i] < b_big[i]) return -1;
        i++;
    }

    return 0;
}

// 如果全是0，返回true，反之 false
function isAllZero(r){
    for(var i=0, len=r.length; i<len; i++){
        if (r[i] !== 0) {
            return false;
        }
    }

    return true;
}

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    if ( isAllZero(nums) ) {
        return "0";
    }

    var ret = [ nums[0] ];
    var nums_len = nums.length;
    var find = false;

    for(var i = 1; i<nums_len; i++){
        find = false;
        var ret_len = ret.length;

        var a = nums[i];

        var b1 = ret[0];
        var b2 = ret[ret_len - 1];

        if ( whoBig(a, b1) >= 0  ) {
            ret.unshift(a);
            continue;
        }

        if ( whoBig(a, b2) <= 0) {
            ret.push(a);
            continue;
        }

        // 二分查找
        var left = 0;
        var right = ret_len - 1;

        while(left < right && right - left > 1) {
            var mid = parseInt( (left + right) / 2, 10 );
            var t = whoBig(a, ret[mid]);

            if( t == 1 ){
                right = mid;
            } else if ( t == -1 ){
                left = mid;
            } else {
                ret.splice(mid, 0, a);
                find = true;
                break;
            }
        }

        if (!find){
            if (whoBig(a, ret[left]) >= 0) {
                ret.splice(left - 1, 0, a);
            } else if( whoBig(a, ret[right]) <= 0) {
                ret.splice(right + 1, 0, a);
            } else {
                ret.splice(right, 0, a);
            }
        }

    }

    return ret.join("");

};
