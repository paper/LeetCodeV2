/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var ret = 0;
    var len = points.length;

    for(var i=0; i<len;i++) {
        var hash = {};
        for(var j=0; j<len; j++) {
            var pi = points[i];
            var pj = points[j];

            var d = getDistance(pi, pj);

            if( hash[d] === undefined ) {
                hash[d] = 1;
            }else{
                hash[d] += 1;
            }
        }

        for(var index in hash) {
            ret += hash[index] * (hash[index]-1);
        }
    }

    return ret;

    function getDistance(p1, p2) {
        var dx = p1[0] - p2[0];
        var dy = p1[1] - p2[1];

        return dx*dx + dy*dy;
    }
};

