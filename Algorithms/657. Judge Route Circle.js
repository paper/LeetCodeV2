/**
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves, 
 * judge if this robot makes a circle, which means it moves back to the original place.
 *
 * The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
 *
 * Example 1:
 *  Input: "UD"
 *  Output: true
 * Example 2:
 *  Input: "LL"
 *  Output: false
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var len = moves.length;

    // 走奇数步，肯定回不来
    if( len % 2 !== 0 ) return false;
    
    // 起点坐标
    var x = 0;
    var y = 0;
    
    for(var i=0; i<len; i++) {
        var char = moves.charAt(i);
        
        switch (char) {
            case 'L':
                x -= 1 ;
                break;
            case 'R':
                x += 1;
                break;
            case 'U':
                y += 1;
                break;
            case 'D':
                y -= 1;
                break;
        }
    }

    return x === 0 && y === 0;
};
