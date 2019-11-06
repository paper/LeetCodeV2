/**
 * Created by paper on 15/7/24.
 * 
 * Restore IP Addresses
 * https://leetcode.com/problems/restore-ip-addresses/
 * 
 * Given a string containing only digits, 
 * restore it by returning all possible valid IP address combinations.
 * 
 * For example:
 * Given "25525511135",
 * 
 * return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
 */

/**
 * @param {string} s
 * @return {string[]}
 * 
 * 递归小总结
 * 1）大问题要分成合理的子问题
 * 2）子问题的答案要符合大问题答案格式
 * 3）如何合并子问题答案
 * 4）子问题中，最小(或最底层)问题答案要处理好返回值
 *    1是要让它”父亲“可以利用，2是边界情况多思考思考
 */
var restoreIpAddresses = function(s) {
  var len = s.length;

  if (len < 4) return [];
  if (len === 4) return [ s.split("").join(".") ];

  function combo(s, r) {
    var r2 = [];

    r.forEach(function (v, i) {
      var dot = v === "" ? "" : ".";

      r2[i] = s + dot + v;
    });

    return r2;
  }

  function strIsNumber(s){
    return !(s.length > 1 && s.charAt(0) === "0");
  }

  function fn(s, n) {

    if (n === 1) {
      if (strIsNumber(s) && parseInt(s, 10) <= 255 ) {
        return [s];
      } else {
        return false;
      }
    }

    var v1 = [];
    var v2 = [];
    var v3 = [];

    if (s.length >= 1) {
      var a = s.slice(0, 1);
      var t1 = fn(s.slice(1), n - 1);

      if (t1 !== false) {
        v1 = combo(a, t1);
      }
    }

    if (s.length >= 2) {
      var b = s.slice(0, 2);

      if( strIsNumber(b) ){
        var t2 = fn(s.slice(2), n - 1);

        if (t2 !== false) {
          v2 = combo(b, t2);
        }
      }
    }

    if (s.length >= 3) {
      var c = s.slice(0, 3);

      if (strIsNumber(c) && parseInt(c, 10) <= 255) {
        var t3 = fn(s.slice(3), n - 1);

        if (t3 !== false) {
          v3 = combo(c, t3);
        }
      }
    }

    return v1.concat(v2.concat(v3));

  }//end fn

  return fn(s, 4);
};