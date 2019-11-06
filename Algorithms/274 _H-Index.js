/**
    Created by paper on 15/9/21.

    H-Index
    https://leetcode.com/problems/h-index/

    Given an array of citations (each citation is a non-negative integer) of a researcher, 
    write a function to compute the researcher's h-index.

    According to the definition of h-index on Wikipedia: 
    "A scientist has index h if h of his/her N papers have at least h citations each, 
    and the other N − h papers have no more than h citations each."

    For example, given citations = [3, 0, 6, 1, 5], 
    which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. 
    Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

    Note: If there are several possible values for h, 
    the maximum one is taken as the h-index. 
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length === 0) return 0;
    
    var r = citations.filter(function(v){
        return v > 0;
    });
    
    var l = r.length;
    if (l === 0) return 0;
    
    r.sort(function(a, b){ return b - a });
    
    var hMax = Math.min(r[0], l);
    if (hMax === 1) return 1;

    for(var i = 0; i<l; i++) {
        var cur = r[i];

        if (cur < hMax) {
            hMax = cur;

            if ( cur - i === 1 ) {
                return cur;
            }

            if (cur - i <= 0) {
                return Math.min( i, r[i-1] );
            }
        }
    }
    
    return Math.min( l, r[l-1] );
};

