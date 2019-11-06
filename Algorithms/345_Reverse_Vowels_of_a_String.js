/**
 * Created by paper on 2016/6/12.
 * 
 * Write a function that takes a string as input and reverse only the vowels of a string.
 *
 * Example 1:
 * Given s = "hello", return "holle".
 *
 * Example 2:
 * Given s = "leetcode", return "leotcede".
 *
 * vowels: a，e，i，o，u
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var result = '';
    var r = s.split('');

    var len = r.length;
    var first = 0;
    var last  = len - 1;

    function isVowel(char){
        var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        return vowels.indexOf(char) > -1;
    }

    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    while(first < last){
        var firstTempChar = r[first];
        var lastTempChar = r[last];

        // 如果两个都是元音，交换
        if( isVowel(firstTempChar)  && isVowel(lastTempChar) ){
            swap(r, first, last);
            first++;
            last--;
        }
        // 开头没找到元音，但末尾找到了
        else if( !isVowel(firstTempChar) && isVowel(lastTempChar) ){
            first++;
        }

        // 开头找到元音，但末尾没找到
        else if( isVowel(firstTempChar) && !isVowel(lastTempChar) ){
            last--;
        }
        // 两个都不是元音
        else {
            first++;
            last--;
        }
    }

    return r.join('');
};

//console.log( reverseVowels('hello') )
//console.log( reverseVowels('leetcode') )
//console.log( reverseVowels('aA') )