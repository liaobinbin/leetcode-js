/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    var m = matrix.length;
    var n = matrix[0].length;

    this.preSum = new Array(m+1) 
    if (m == 0 || n == 0) return;


    for (var i = 1; i <= m; i++) {
        // 将和值默认为0
        if (!this.preSum[i-1]) {
            this.preSum[i-1] = new Array(n+1).fill(0) 
        }
        if(!this.preSum[i]){
            this.preSum[i] = new Array(n+1).fill(0)
        }
        for (var j = 1; j <= n; j++) {
            this.preSum[i][j] = this.preSum[i - 1][j] + this.preSum[i][j - 1] + matrix[i - 1][j - 1] - this.preSum[i - 1][j - 1];
        }
    }

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.preSum[row2+1][col2+1] - this.preSum[row1][col2 + 1] - this.preSum[row2+1][col1] + this.preSum[row1][col1]

};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

