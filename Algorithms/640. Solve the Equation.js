/**
 * 640. 求解方程
 * https://leetcode-cn.com/problems/solve-the-equation/
 * Created by paper on 2019-04-30
 * 
 * 执行用时 : 88 ms, 在Solve the Equation的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 33.3 MB, 在Solve the Equation的JavaScript提交中击败了88.89% 的用户
 * 
 * ==================================== 题目描述 ====================================
 * 
 * 求解一个给定的方程，将x以字符串"x=#value"的形式返回。该方程仅包含'+'，' - '操作，变量 x 和其对应系数。
 * 
 * 如果方程没有解，请返回“No solution”。
 * 
 * 如果方程有无限解，则返回“Infinite solutions”。
 * 
 * 如果方程中只有一个解，要保证返回值 x 是一个整数。
 * 
 * 示例 1：
 * 
 * 输入: "x+5-3+x=6+x-2"
 * 输出: "x=2"
 * 示例 2:
 * 
 * 输入: "x=x"
 * 输出: "Infinite solutions"
 * 示例 3:
 * 
 * 输入: "2x=x"
 * 输出: "x=0"
 * 示例 4:
 * 
 * 输入: "2x+3x-6x=x+2"
 * 输出: "x=-1"
 * 示例 5:
 * 
 * 输入: "x=x+2"
 * 输出: "No solution"
 */

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  
  const r = equation.split('=')
  const leftFormat = format(r[0])
  const rightFormat = format(r[1])
  
  const left_num_x = leftFormat.num_x - rightFormat.num_x
  const right_num = rightFormat.num - leftFormat.num
  
  if( left_num_x === 0 ) {
    if( right_num === 0 ) {
      return 'Infinite solutions'
    } else {
      return 'No solution'
    }
  }
  
  return "x=" + (right_num / left_num_x)
  
  function format(side) {
    let str = ''
    
    // 第一个'-'号，前面不需要加'+'号
    side.split('').forEach((s, index)=>{
      str += (s === '-' && index !== 0) ? '+-' : s
    })
    
    let r = str.split('+')
    
    let num_x = 0
    let num = 0
    
    for(let i=0; i<r.length; i++) {
      if( r[i].indexOf('x') > -1 ) {
        let n = r[i].split('x')[0]
        if( n === '' ) n = 1
        else if( n === '-' ) n = -1
        
        num_x += parseInt(n, 10)
      } else {
        num += parseInt(r[i], 10)
      }
    }
    
    return {
      num_x,
      num
    }
  }
  
};