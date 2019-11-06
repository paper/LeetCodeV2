/**
 * Given a List of words, 
 * return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 *
 * Example 1:
 *  Input: ["Hello", "Alaska", "Dad", "Peace"]
 *  Output: ["Alaska", "Dad"]
 *  
 * Note:
 *  You may use one character in the keyboard more than once.
 *  You may assume the input string will only contain letters of alphabet.
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var len = words.length;

    if(len === 0) return [];

    var line1 = 'qwertyuiop';
    var line2 = 'asdfghjkl';
    var line3 = 'zxcvbnm';

    var ret = [];

    words.forEach(function (word) {
        if( check(word) ) {
            ret.push(word);
        }
    });

    function check(word) {
        word = word.toLowerCase();

        var oldLine = 0;
        var newLine = 0;

        for(var i=0; i<word.length; i++) {
            var char = word.charAt(i);

            if( line1.indexOf(char) > -1 ) { newLine = 1; }
            else if( line2.indexOf(char) > -1 ) { newLine = 2; }
            else if( line3.indexOf(char) > -1 ) { newLine = 3; }

            if( oldLine === 0 ) {
                oldLine = newLine;
            }else{
                if( oldLine != newLine ) {
                    return false;
                }
            }
        }

        return true;
    }

    return ret;
};
