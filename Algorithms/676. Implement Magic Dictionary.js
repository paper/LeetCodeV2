/**
 * Implement a magic directory with buildDict, and search methods.
 * For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.
 * 
 * For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.
 * 
 * Example 1:
 * Input: buildDict(["hello", "leetcode"]), Output: Null
 * Input: search("hello"), Output: False
 * Input: search("hhllo"), Output: True
 * Input: search("hell"), Output: False
 * Input: search("leetcoded"), Output: False
 * Note:
 * You may assume that all the inputs are consist of lowercase letters a-z.
 * For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.
 * Please remember to RESET your class variables declared in class MagicDictionary, 
 * as static/class variables are persisted across multiple test cases. Please see here for more details.
 */

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this._dict = []
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this._dict = dict
    return null
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    let dict = this._dict
    
    for(let i = 0; i<dict.length; i++) {
        if( judge(dict[i], word) ) {
            return true
        }
    }
    
    return false
    
    function judge(dictWord, searchWord) {
        let dictWordLength = dictWord.length
        let searchWordLength = searchWord.length
        
        if( dictWord === searchWord || dictWordLength !== searchWordLength ) {
            return false
        }
        
        let len = dictWordLength
        
        for(let i = 0; i<len; i++) {
            // 发现有一个不一样的字符了
            if( dictWord.charAt(i) !== searchWord.charAt(i) ) {
                // 如果这不一样的字符在末尾，那么肯定这2个单词是可以返回true，因为只要改变最后一个字符即可
                if( i === len - 1 ) {
                    return true
                }else{
                    // 如果这不一样的字符不是在末尾，那么如果要返回true，那么必须跟着i后面位置的整个字符串必须相等才行
                    return dictWord.slice(i+1) === searchWord.slice(i+1)
                }
            }
        }
        
        return false
    }
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
