/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    var result = 0; 
    var left = 0; 
    var cur = 1
    for (var right = 0; right < nums.length; right++) {
        cur *= nums[right]
        while (left <= right && cur >= k) {
            cur /= nums[left]
            left++
        }
        result += right - left + 1
    }
    return result
};
// @lc code=end

