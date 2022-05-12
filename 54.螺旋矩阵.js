/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var m = matrix.length;
    var n = matrix[0].length;

    var res = new Array()

    var top_bound = 0;
    var right_bound = n - 1;
    var bottom_bound = m - 1;
    var left_bound = 0;

    while (res.length < m * n) {
        if (top_bound <= bottom_bound) {
            for (var i = left_bound; i <= right_bound; i++) {
                res.push(matrix[top_bound][i])
            }

            top_bound++;
        }
        if (left_bound <= right_bound) {
            for (var i = top_bound; i <= bottom_bound; i++) {
                res.push(matrix[i][right_bound])
            }

            right_bound--
        }

        if (top_bound <= bottom_bound) {
            for (var i = right_bound; i >= left_bound; i--) {
                res.push(matrix[bottom_bound][i])
            }

            bottom_bound--
        }

        if (left_bound <= right_bound) {
            for (var i = bottom_bound; i >= top_bound; i--) {
                res.push(matrix[i][left_bound])
            }

            left_bound++
        }

    }

    return res
};
// @lc code=end

