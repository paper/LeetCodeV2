/**
 * Given a positive integer n, 
 * find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
 *
 * For example, 
 * given n = 12, return 3 because 12 = 4 + 4 + 4; 
 * given n = 13, return 2 because 13 = 4 + 9.
 */

/**
 * https://discuss.leetcode.com/topic/26400/an-easy-understanding-dp-solution-in-java
 * 
 * dp[0] = 0
 * dp[1] = dp[0]+1 = 1
 * dp[2] = dp[1]+1 = 2
 * dp[3] = dp[2]+1 = 3
 * dp[4] = Min{ dp[4-1*1]+1, dp[4-2*2]+1 }
 * = Min{ dp[3]+1, dp[0]+1 }
 * = 1
 * dp[5] = Min{ dp[5-1*1]+1, dp[5-2*2]+1 }
 * = Min{ dp[4]+1, dp[1]+1 }
 * = 2
 * .
 * .
 * .
 * dp[13] = Min{ dp[13-1*1]+1, dp[13-2*2]+1, dp[13-3*3]+1 }
 * = Min{ dp[12]+1, dp[9]+1, dp[4]+1 }
 * = 2
 * .
 * .
 * .
 * dp[n] = Min{ dp[n - i*i] + 1 },  n - i*i >=0 && i >= 1
 * 
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if( n <= 0 ) {
        return 0;
    }

    var x = Math.sqrt(n);
    if( Math.floor(x) === x ) {
        return 1;
    }

    var dp = [];

    dp[0] = 0;

    for(var i=1; i<=n; i++) {
        var min = Number.MAX_VALUE;
        var j = 1;
        while (i - j*j >= 0) {
            min = Math.min(min, dp[i - j*j] + 1);
            j += 1;
        }
        dp[i] = min;
    }

    return dp[n];
};

/**
 * Created by paper on 19/11/06.
 * https://leetcode-cn.com/problems/perfect-squares/comments/
 * 
 * 更新算法，其实只要广度优先搜索，如果命中了其中一条路径，那么说明这条路径肯定是最短的，可以立即停止
 * 
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  
  let ret = 0;
  let list = [n];
  
  let isFind = false;
  
  while (true) {
    
    if (isFind) {
      break;
    }
    
    ret += 1;
    
    let newList = [];
    
    walk: {
      for(let i = 0; i < list.length; i++) {
        const n = list[i];
        
        const max_v = Math.floor(Math.sqrt(n));
        
        for(let j = max_v; j >= 1; j--) {
          const n2 = n - j * j;
          
          if (n2 === 0) {
            isFind = true;
            break walk;
          } else {
            newList.push(n2);
          }
        }
        
      }
    } // end walk
    
    list = newList;
    
  } // end while
  
  return ret;
};

