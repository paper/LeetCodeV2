/**
 * Created by paper on 2016/6/27.
 * 
 * Given a digit string, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * 
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    'use strict';

    var telephoneButtons = [
        '',
        ['*'],                ['a', 'b', 'c'], ['d', 'e', 'f'],
        ['g', 'h', 'i'],      ['j', 'k', 'l'], ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']
    ];

    if( digits === '' || digits.indexOf('0') > -1 ) {
        return [];
    }

    var digitsArr = digits.split('');

    function total(digitsArr) {

        var ret = [];

        if( digitsArr.length === 1 ) {
            return telephoneButtons[digitsArr[0]];
        }

        var first   = digitsArr[0];
        var lastArr = digitsArr.slice(1);

        var tempRet = total(lastArr);

        var firstLetters = telephoneButtons[first];
        firstLetters.forEach(function(letter){
            tempRet.forEach(function(t){
                ret.push( letter + t );
            });
        });

        return ret;
    }

    return total(digitsArr);
};

