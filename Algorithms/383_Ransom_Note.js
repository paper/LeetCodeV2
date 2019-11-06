/**
 * Created by paper on 2016/8/12.
 * 
 * Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  
 * write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ;  otherwise,  it  will  return  false.   
 * 
 * Each  letter  in  the  magazine  string  can  only  be  used  once  in  your  ransom  note.
 * 
 * Note:
 *  You may assume that both strings contain only lowercase letters.
 * 
 *  canConstruct("a", "b") -> false
 *  canConstruct("aa", "ab") -> false
 *  canConstruct("aa", "aab") -> true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var note = ransomNote.split('');
    var maga = magazine.split('');

    var noteObj = {};
    var magaObj = {};

    count(noteObj, note);
    count(magaObj, maga);

    for(var noteLetter in noteObj) {
        var noteLetterNum = noteObj[noteLetter];
        var magaLetterNum = magaObj[noteLetter];

        if( magaLetterNum === undefined || noteLetterNum > magaLetterNum) {
            return false;
        }
    }

    function count(obj, r){
        r.forEach(function(letter){
            if( obj[letter] ){
                obj[letter] += 1;
            } else{
                obj[letter] = 1;
            }
        });
    }

    return true;
};