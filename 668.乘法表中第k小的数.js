/*
 * @lc app=leetcode.cn id=668 lang=javascript
 *
 * [668] 乘法表中第k小的数
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
    var left = 1, right = m * n;
    while (left < right) {
        var x = left + Math.floor((right - left) / 2)
        var count = Math.floor(x / n) * n;
        for (var i = Math.floor(x / n) + 1; i <= m; i++) {
            count += Math.floor(x / i)
        }
        if (count >= k) {
            right = x;
        } else {
            left = x + 1;
        }
    }
    return left

};
// @lc code=end

