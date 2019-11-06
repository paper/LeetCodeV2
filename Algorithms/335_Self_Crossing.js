/**
 *  Created by paper on 16/3/14.
 * 
 *  You are given an array x of n positive numbers. You start at point (0,0) and moves x[0] metres to the north, then x[1] metres to the west, 
 *  x[2] metres to the south, x[3] metres to the east and so on. In other words, after each move your direction changes counter-clockwise.
 *  
 *  Write a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not.
 *  
 *  Example 1:
 *  Given x = [2, 1, 1, 2],
 *  ┌───┐
 *  │      │
 *  └───┼──>   
 *          │
 *  
 *  Return true (self crossing)
 *  Example 2:
 *  Given x = [1, 2, 3, 4],
 *  ┌──────┐
 *  │            │
 *  │
 *  │
 *  └────────────>
 *  
 *  Return false (not self crossing)
 *  Example 3:
 *  Given x = [1, 1, 1, 1],
 *  ┌───┐
 *  │      │
 *  └───┼>
 *  Return true (self crossing)
 */

/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {

    var len = x.length;

    if( len < 3 ) return false;

    // 存储线段
    // 线段为 [ [x1, y1], [x2, y2] ]
    var r = [];

    var beginPoint = [0, 0];
    var endPoint = [0, 0];
    
    var directions = ['north', 'west', 'south', 'east'];

    // 首先根据x数组，生成所有的线段
    for(var i=0; i<len; i++){

        var direction = directions[i%4];

        var v = x[i];
        
        switch (direction) {
            case 'north':
                endPoint[0] = beginPoint[0];
                endPoint[1] = beginPoint[1] + v;
                break;
            case 'west':
                endPoint[0] = beginPoint[0] - v;
                endPoint[1] = beginPoint[1];
                break;
            case 'south':
                endPoint[0] = beginPoint[0];
                endPoint[1] = beginPoint[1] - v;
                break;
            case 'east':
                endPoint[0] = beginPoint[0] + v;
                endPoint[1] = beginPoint[1];
                break;
        }

        var newPoint = [beginPoint.concat(), endPoint.concat()];

        //console.log(JSON.stringify(r.join('    ')))
        
        // 除了靠着newPoint的那个线段
        for(var j=0; j< r.length - 1; j++) {
            if( checkTwoLineIsCrossing(r[j], newPoint) ) {
                //console.log(r[j].join(" "), newPoint.join(" "))
                return true;
            }
        }
        
        r.push(newPoint);

        beginPoint[0] = endPoint[0];
        beginPoint[1] = endPoint[1];
    }
    
    
    
    return false;
};//end isSelfCrossing

/**
 * 判断2个线段是否相交
 * @line1 线段为 [ [x1, y1], [x2, y2] ]
 * @line2 一样
 * 
 * @return {Boolean} 如果相交为true，不相交为false
 */
function checkTwoLineIsCrossing(line1, line2) {
    var min = Math.min;
    var max = Math.max;
    
    var line1_x1 = line1[0][0];
    var line1_y1 = line1[0][1];
    var line1_x2 = line1[1][0];
    var line1_y2 = line1[1][1];

    var line2_x1 = line2[0][0];
    var line2_y1 = line2[0][1];
    var line2_x2 = line2[1][0];
    var line2_y2 = line2[1][1];
    
    // 如果两个都是竖着的
    if(line1_x1 === line1_x2 && line2_x1 === line2_x2) {
        // 平行
        if( line1_x1 !== line2_x1 ) return false;
        
        // 同一直线上不重合
        if( min(line1_y1, line1_y2) > max(line2_y1, line2_y2) || max(line1_y1, line1_y2) < min(line2_y1, line2_y2) ) {
            return false;
        }
        
        // 同一直线，并且重合了
        return true;
    }

    // 如果两个都是横着的
    if( line1_y1 === line1_y2 && line2_y1 === line2_y2 ) {
        // 平行
        if( line1_y1 !== line2_y1 ) return false;
        
        // 同一直线上不重合
        if( min(line1_x1, line1_x2) > max(line2_x1, line2_x2) || max(line1_x1, line1_x2) < min(line2_x1, line2_x2) ) {
            return false;
        }

        // 同一直线，并且重合了
        return true;
    }
    
    // 如果line1竖着，line2横着
    if( line1_x1 === line1_x2 && line2_y1 === line2_y2 ) {
        if( line2_y1 <= max(line1_y1, line1_y2) && line2_y1 >= min(line1_y1, line1_y2) && 
            line1_x1 <= max(line2_x1, line2_x2) && line1_x1 >= min(line2_x1, line2_x2) ) {
            return true;
        }
        
        return false;
    }

    // 如果line1横着，line2竖着
    if( line1_y1 === line1_y2 && line2_x1 === line2_x2 ) {
        if( line1_y1 <= max(line2_y1, line2_y2) && line1_y1 >= min(line2_y1, line2_y2) &&
            line2_x1 <= max(line1_x1, line1_x2) && line2_x1 >= min(line1_x1, line1_x2) ) {
            return true;
        }

        return false;
    }
    
}