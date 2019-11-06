/**
    Created by paper on 15/8/11.

    Maximal Square
    https://leetcode.com/problems/maximal-square/

    Given a 2D binary matrix filled with 0's and 1's, 
    find the largest square containing all 1's and return its area.

    For example, given the following matrix:

    1 0 1 0 0
    1 0 1 1 1
    1 1 1 1 1
    1 0 0 1 0

    Return 4. 
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var ret = 0;
    
    var x = matrix.length;
    if(x === 0) return ret;
    
    var y = matrix[0].length;
    if(y === 0 ) return ret;
    
    
    var cache = {};
    
    var getCache = function(x1, y1, x2, y2){
        var key = [x1, y1, x2, y2].join("-");
        return cache[key];
    };
    
    var setCache = function(x1, y1, x2, y2, value){
        var key = [x1, y1, x2, y2].join("-");
        cache[key] = value;
    };
    
    function checkSquare(x1, y1, x2, y2){
        var ret = true;
        
        if( getCache(x1, y1, x2, y2) === true ) return ret;
        
        while(x2 >= x1){
            for(var j = y1; j<=y2; j++){
                if( matrix[x2][j] === "0" ) {
                    ret = false;
                    break;
                }
            }
            
            for( var i = x1; i < x2; i++ ){
                if( matrix[i][y2] === "0" ) {
                    ret = false;
                    break;
                }
            }
            
            x2--;
            y2--;
        }
        
        setCache(x1, y1, x2, y2, ret);
        
        return ret;
    }
    
    var i, j, k, cur,
        x1, y1, x2, y2;
    
    for(i = 0; i<x; i++){
        for(j = 0; j<y; j++){
            cur = matrix[i][j];
            
            if( cur === "1" ){
                k = 1;
                ret = Math.max(k*k, ret);
                
                x1 = i;
                y1 = j;
                x2 = i+1;
                y2 = j+1;
                
                while(true){
                    if(x2 > x - 1) break;
                    if( !checkSquare(x1, y1, x2, y2) ) break;
                    
                    k++;
                    ret = Math.max(k*k, ret);
                    
                    x2++;
                    y2++;
                }
            }
            
        }
    }


    
    return ret;
    
};