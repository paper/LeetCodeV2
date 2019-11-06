/**
 * Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.
 *
 * Now, you are given positions of houses and heaters on a horizontal line, 
 * find out minimum radius of heaters so that all houses could be covered by those heaters.
 *
 * So, your input will be the positions of houses and heaters seperately, 
 * and your expected output will be the minimum radius standard of heaters.
 *
 * Note:
 * Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
 * Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
 * As long as a house is in the heaters' warm radius range, it can be warmed.
 * All the heaters follow your radius standard and the warm radius will the same.
 * 
 * Example 1:
 * Input: [1,2,3],[2]
 * 
 * Output: 1
 * Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
 * 
 * Example 2:
 * Input: [1,2,3,4],[1,4]
 * 
 * Output: 1
 * Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
 */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    // 对管道进行排序，方便后续的二分查找
    heaters.sort(function (a, b) {
        return a - b;
    });

    var ret = 0;

    houses.forEach(function (house) {
        // 总是存储房子中最长的取暖管道
        ret = Math.max(ret, getMinRadiusBybinarySearch(heaters, house));
    });

    return ret;

    // 二分查找，当前的房子，最近需要多长的管道取暖
    function getMinRadiusBybinarySearch(heaters, house) {
        var len = heaters.length;

        if( len === 1 ) {
            return Math.abs(heaters[0] - house);
        }

        var left = 0;
        var right = len - 1;

        while (right > left) {

            if( right - left === 1 ) {
                if( heaters[left] >= house ) {
                    return Math.abs(heaters[left] - house);
                }

                if( heaters[right] <= house ) {
                    return Math.abs(heaters[right] - house);
                }

                return Math.min(Math.abs(heaters[left] - house), Math.abs(heaters[right] - house));
            }

            var mid = Math.floor( (left + right)/2 );

            if( heaters[mid] === house ) {
                return 0;
            }

            if( heaters[mid] > house ) {
                right = mid;
            }else{
                left = mid;
            }
        }

    }
};


