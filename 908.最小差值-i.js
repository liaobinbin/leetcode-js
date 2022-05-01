/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    var maxValue = _.max(nums)
    var minValue = _.min(nums)
    
    return maxValue - minValue <=  2 * k ? 0 : maxValue - minValue - 2 * k

};
// @lc code=end

