/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最少移动次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b)=> a -b)
    var n = nums.length;
    var ret = 0;
    var x = nums[Math.floor(n / 2)]

    for(var i =0; i<n; i++){
        ret+= Math.abs(nums[i] - x)
    }

    return ret

};
// @lc code=end

