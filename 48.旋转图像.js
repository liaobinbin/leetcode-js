/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    for(var i =0;i<n; i++){
        for(var j=i; j<n;j++){
            var temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp 
        }
    }

    for(row of matrix){
        row.reverse()
    }
    

};
// @lc code=end

