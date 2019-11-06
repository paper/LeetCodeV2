/**
 * Created by paper on 2016/9/18.
 * 
 * Given an array of integers A and let n to be its length.
 *
 * Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:
 *
 * F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].
 *
 * Calculate the maximum value of F(0), F(1), ..., F(n-1).
 *
 * Note:
 * n is guaranteed to be less than 105.
 *
 * Example:
 *
 * A = [4, 3, 2, 6]
 *
 * F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
 * F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
 * F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
 * F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
 *
 * So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    var len = A.length;
    if( len === 0 ) return 0;

    var sum = A.reduce(function(prev, cur){
        return prev + cur;
    }, 0);

    var F = [];

    A.forEach(function(v, i){
        F[i] = 0;
        F[0] += v * i;
    });

    for(var i=1; i<len; i++) {
        // 这里是关键
        // 仔细观察上面的 F(0)-F(3) 的公式
        // 例如： F[2] 比 F[1] 多了左边3个值，少了右边一个值
        F[i] = F[i-1] + (sum - A[len-i]) - (len-1) * A[len-i];
    }

    return Math.max.apply(null, F);
};
