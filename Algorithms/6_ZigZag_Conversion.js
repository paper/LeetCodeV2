/**
 * Created by paper on 2016/8/19.
 * 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * 
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var length = s.length;
    if(numRows === 1 || numRows >= length) {
        return s;
    }

    var sr  = s.split('');
    var ret = '';

    for(var i=0; i<numRows; i++){
        var line  = i; // 行数
        var index = i; // 指针，每一行的最开始的下标

        ret += sr[index];

        while(true){
            var step = index + 2*numRows-2;
            var next = step - line*2;

            if( next >= length ){
                break;
            }
            
            var nextStr = sr[next];
            var stepStr = step < length ? sr[step] : '';

            // 第一行和最后一行按step位移即可
            if(line === 0 || line === numRows-1) {
                ret += stepStr;
            }else{
                ret += (nextStr + stepStr);
            }

            index = step;
        }
    }

    return ret;
};
