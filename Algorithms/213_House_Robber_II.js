/**
    Created by paper on 15/8/3.

    House Robber II 
    https://leetcode.com/problems/house-robber-ii/

    Note: This is an extension of House Robber.

    After robbing those houses on that street, 
    the thief has found himself a new place for his thievery so that he will not get too much attention. 
    This time, all houses at this place are arranged in a circle. 
    That means the first house is the neighbor of the last one. Meanwhile, 
    the security system for these houses remain the same as for those in the previous street.

    Given a list of non-negative integers representing the amount of money of each house, 
    determine the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 主要思路就是把循环的数组，变成单向的数组，然后依然是递归和动态规划
 */
var rob = function(nums) {
    var len = nums.length;
    
    if(len === 0) return 0;
    
    // 如果第一个和最后一个都是0，那么这2个都不选，就变成了 nums[1,len-1] 的单向子问题
    if(nums[0] === 0 && nums[len-1] === 0){
        return subRob(nums.slice(1,len-1));
    }
    
    // 请参考 198_House_Robber.js
    function subRob(nums){
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
    }//end subRob
    
    function fn(i){

        switch(i){
            case 0: return nums[0];     
            case 1: return Math.max(nums[0], nums[1]);  
            case 2: return Math.max(nums[0], nums[1], nums[2]);
            case 3: return Math.max(nums[0] + nums[2], nums[1] + nums[3]);
        }
        
        // 选了最后一个
        // var ret1 = subRob(nums.slice(1,len-2)) + nums[len-1];
        
        // 没选最后一个
        // var ret2 = subRob(nums.slice(0,len-1));
        
        return Math.max( subRob(nums.slice(1,len-2)) + nums[len-1], subRob(nums.slice(0,len-1)) );
    } 
    
    return fn(nums.length - 1);
};


