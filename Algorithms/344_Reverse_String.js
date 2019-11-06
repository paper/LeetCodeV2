/**
 * Created by paper on 2016/6/12.
 * 
 * Write a function that takes a string as input and returns the string reversed.
 * 
 * Example:
 * Given s = "hello", return "olleh".
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var result = '';
    var r = s.split('');

    var len = r.length;
    var first = 0;
    var last  = len - 1;

    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    while(first < last){
        var firstTempChar = r[first];
        var lastTempChar = r[last];

        swap(r, first, last);
        first++;
        last--;
    }

    return r.join('');
};