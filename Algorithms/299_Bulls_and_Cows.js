/**
 *  Created by paper on 15/11/29.
 * 
 *  Bulls and Cows
 *  https://leetcode.com/problems/bulls-and-cows/
 * 
 *  You are playing the following Bulls and Cows game with your friend: 
 *  You write down a number and ask your friend to guess what the number is. 
 *  Each time your friend makes a guess, 
 *  you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") 
 *  and how many digits match the secret number but locate in the wrong position (called "cows"). 
 *  Your friend will use successive guesses and hints to eventually derive the secret number.
 *  
 *  For example:
 *  
 *  Secret number:  "1807"
 *  Friend's guess: "7810"
 *  
 *  Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
 *  
 *  Write a function to return a hint according to the secret number and friend's guess, 
 *  use A to indicate the bulls and B to indicate the cows. In the above example, 
 *  your function should return "1A3B".
 *  
 *  Please note that both secret number and friend's guess may contain duplicate digits, for example:
 *  
 *  Secret number:  "1123"
 *  Friend's guess: "0111"
 *  
 *  In this case, the 1st 1 in friend's guess is a bull, 
 *  the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
 *  
 *  You may assume that the secret number and your friend's guess only contain digits, 
 *  and their lengths are always equal.
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var A_num = 0;
    var B_num = 0;
    
    var s = [];
    var g = [];
    
    for (var i = 0; i < secret.length; i++) {
        var secret_word = secret.charAt(i);
        var guess_word = guess.charAt(i);
        
        if (secret_word === guess_word) {
            A_num++;
        } else {
            s.push(secret_word);
            g.push(guess_word);
        }
    }
    
    if (s.length !== ""){
        g.forEach(function(v){
            var index = s.indexOf(v);
            if (index !== -1){
                B_num++;
                s[index] = -1;
            }
        });
    }
    
    return [A_num, "A", B_num, "B"].join("");
};


