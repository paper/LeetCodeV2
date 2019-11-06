/**
 * Created by paper on 2019/11/06.
 * https://leetcode-cn.com/problems/open-the-lock/submissions/
 */


/**
 * 广度优先搜索，从 '0000'开始，搜索它周边的8组数字搜索，然后层层向外。
 * 像是再画一圈一圈的圆，但记得过滤掉已经访问过的“节点”，不然会陷入死循环
 * 
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = function (deadends, target) {
  const beginNode = '0000';
  const used = {};
  
  if (target === beginNode) {
    return 0;
  }
  
  deadends.forEach(deadend => {
    used[deadend] = 1;
  });
  
  let step = 0;
  let result = -1;
  
  if (used[beginNode] === 1) {
    return -1;
  }
  
  used[beginNode] = 1;
  
  let nextNodes = [beginNode];
  
  do{
    if (result !== -1 || nextNodes.length === 0) {
      break;
    }
    
    step += 1;
    
    let newNextNodes = [];
    
    check: {
      for(let i = 0; i < nextNodes.length; i++) {
        const list = findAroundNodesAndNotInUsedAndNotInDeadends(nextNodes[i]);
        
        for(let j=0; j<list.length; j++) {
          const curNode = list[j];
          
          if (curNode === target) {
            result = step;
            break check;
          } else {
            if (used[curNode] !== 1) {
              used[curNode] = 1;
              newNextNodes.push(curNode);
            }
          }
        }
      }
    }
    
    nextNodes = newNextNodes;
    
  }while (true)
  
  return result;
  
  function findAroundNodesAndNotInUsedAndNotInDeadends(node) {
    const ret = [];
    const nodeArr = node.split('');
    
    for(let i = 0; i < 8; i++) {
      // i = 0, 1, 2, 3 时 -1
      // i = 4, 5, 6, 7 是 +1
      const n = i < 4 ? -1 : 1;
      const index = i % 4;
      
      let oldV = +nodeArr[index];
      let newV = oldV + n;
      
      if (newV >= 10) {
        newV = 0;
      } else if (newV <= -1) {
        newV = 9;
      }
      
      nodeArr[index] = newV;
      
      const nodeStr = nodeArr.join('');
      
      if (used[nodeStr] !== 1) {
        ret.push(nodeStr);
      }
      
      // 还原
      nodeArr[index] = oldV;
    }
    
    return ret;
  }
};

