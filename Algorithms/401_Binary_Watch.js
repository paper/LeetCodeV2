/**
 * Created by paper on 2016/9/19.
 * 
 * A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).
 * Each LED represents a zero or one, with the least significant bit on the right.
 *
 * 
 * For example, the above binary watch reads "3:25".
 * Given a non-negative integer n which represents the number of LEDs that are currently on, 
 * return all possible times the watch could represent.
 *
 * Example:
 *
 *  Input: n = 1
 *  Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
 *  
 * Note:
 *  The order of output does not matter.
 *  The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
 *  The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
 */

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if (num === 0) {
        return ['0:00'];
    }

    // 因为不可能9个，或9个以上的灯亮
    if( num >= 9 ) {
        return [];
    }

    var HOURMAX   = 11;
    var MINUTEMAX = 59;

    var hour   = [1, 2, 4, 8];
    var minute = [1, 2, 4, 8, 16, 32];

    var result = [];

    for(var i=0; i<=num; i++) {
        var hr = getHour(i);
        var mr = getMinute(num-i);

        if( hr.length > 0 && mr.length > 0 ) {
            hr.forEach(function(h){
                mr.forEach(function(m){
                    result.push( [h, m].join(':') );
                });
            });
        }
    }

    return result;

    // 给定数组r，从里面选n个数字之和，有多少种情况
    function getSums(n, r) {
        var len = r.length;

        if( n === 1 ) return r;
        if( n === 0 || n > len) return [];

        var ret = [];

        for(var i=0; i<len; i++) {
            var cur = r[i];
            var next = getSums(n-1, r.slice(i+1));

            next.forEach(function(v){
                ret.push( cur + v );
            });
        }

        return ret;
    }

    function getHour(n) {
        if( n === 0 ) return ['0'];

        return getSums(n, hour).filter(function(h){
            return h <= HOURMAX;
        }).map(function(h){
            return h.toString();
        });
    }

    function getMinute(n) {
        if( n === 0 ) return ['00'];

        return getSums(n, minute).filter(function(m){
            return m <= MINUTEMAX;
        }).map(function(m) {
            return m < 10 ? '0' + m : m.toString();
        });
    }

};

