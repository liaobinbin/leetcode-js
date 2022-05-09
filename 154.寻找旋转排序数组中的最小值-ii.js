/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (nums[pivot] < nums[high]) {
            high = pivot;
        } else if (nums[pivot] > nums[high]) {
            low = pivot + 1;
        } else {
            high -= 1;
        }
    }
    return nums[low];
};

// var findMin = function(nums){
//     nums.sort()
//     return nums[0]
// }
// @lc code=end

