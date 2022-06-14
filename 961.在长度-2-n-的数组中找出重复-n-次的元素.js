/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    var n = nums.length;
    for(var gap=1; gap <=3; gap++){
        for(var i =0; i+gap<n; i++){
            if(nums[i] === nums[i+gap]) {
                return nums[i]
            }
            
        }
    }

    return -1

};
// @lc code=end

