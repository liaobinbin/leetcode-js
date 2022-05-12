/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    var matrix = new Array(n).fill()

    var top_bound = 0;
    var bottom_bound = n - 1
    var left_bound = 0
    var right_bound = n - 1;

    var num = 1;

    while (num <= n * n) {
        if (top_bound <= bottom_bound) {
            for (var i = left_bound; i <= right_bound; i++) {
                if (!matrix[top_bound]) {
                    matrix[top_bound] = new Array()
                }
                matrix[top_bound][i] = num++
            }
            top_bound++
        }
        if (left_bound <= right_bound) {
            for (var i = top_bound; i <= bottom_bound; i++) {
                if (!matrix[i]) {
                    matrix[i] = new Array()
                }
                matrix[i][right_bound] = num++
            }
            right_bound--
        }
        if (top_bound <= bottom_bound) {
            for (var i = right_bound; i >= left_bound; i--) {
                if (!matrix[bottom_bound]) {
                    matrix[bottom_bound] = new Array()
                }

                matrix[bottom_bound][i] = num++
            }
            bottom_bound--
        }
        if (left_bound <= right_bound) {
            for (var i = bottom_bound; i >= top_bound; i--) {
                if (!matrix[i]) {
                    matrix[i] = new Array()
                }

                matrix[i][left_bound] = num++
            }
            left_bound++
        }

    }
    return matrix;


};
// @lc code=end

