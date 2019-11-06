/**
 * Created by paper on 15/7/24.
 * 
 * Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * 
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. 
 * In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  // --------------------------------------------------------
  // 这个递归的方法比较消耗时间
  // 不难看出，其实这就是一个求：斐波那契数列某位的值
  // function climb(n){
  //   
  //   if( n <= 2 ) return n;
  //   
  //   return climb(n-1) + climb(n-2);
  // }
  // 
  // return climb(n);
  
  // --------------------------------------------------------
  // 公式方法，这个公式的n是从0的开始的，所以这里的n需要 n = n + 1
  // var x = Math.sqrt(5);
  // n = n + 1;
  //
  // return 1/x * ( Math.pow((1+x)/2, n) - Math.pow((1-x)/2, n) );

  // --------------------------------------------------------
  if( n <= 2) return n;
  
  var i = 3;
  var v;
  var a = 2;
  var b = 1;
  
  while( i < n ){
    v = a + b;

    b = a;
    a = v;

    i++;
  }

  return a + b;
};