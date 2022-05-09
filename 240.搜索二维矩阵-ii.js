/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    var rows = matrix.length;
    var columns = matrix[0].length;
    var row = 0;
    var column = columns - 1;
    while(row< rows && column >=0){
        var num = matrix[row][column];
        if(num == target){
            return true;
        } else if (num > target){
            column--
        } else {
            row ++
        }
    }
    return false;
    
};
// @lc code=end

