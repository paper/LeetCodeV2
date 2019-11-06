/**
    Created by paper on 15/8/3.

    House Robber
    https://leetcode.com/problems/house-robber/

    You are a professional robber planning to rob houses along a street. 
    Each house has a certain amount of money stashed, 
    the only constraint stopping you from robbing each of them is that 
    adjacent houses have security system connected 
    and it will automatically contact the police if two adjacent houses were broken into on the same night.

    Given a list of non-negative integers representing the amount of money of each house, 
    determine the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    
    // 去除r前和尾的0
    function trim(r){
        var cr = r.concat();
        
        var i = 0;
        var j = cr.length - 1;
        
        while(cr[i] === 0){
            i++;
            j--;
            
            // 说明r全是0
            if(i > j) return [];
        }
        
        return cr.slice(i, j+1);
    }

    nums = trim(nums);

    if(nums.length === 0) return 0;

    var cache = [];
    
    // 动态规划 和 递归思路
    // 第i个抢和不抢，选其中大的
    // 第i个抢，就是 fn(i-2) + nums[i]，因为 i-1 不能抢
    // 第i个不抢，就是 fn(i-1) 了
    function fn(i){

        switch(i){
            case 0: return nums[0];     
            case 1: return Math.max(nums[0], nums[1]);  
            case 2: return Math.max(nums[0] + nums[2], nums[1]);
        }
        
        if( cache[i] ){
            return cache[i];
        }
        
        cache[i] = Math.max( fn(i-2) + nums[i], fn(i-1) );
        
        return cache[i];
    }

    return fn(nums.length - 1);
};
