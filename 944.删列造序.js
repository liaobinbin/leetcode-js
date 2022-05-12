/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    
    var row = strs.length;
    var col = strs[0].length;
    var ans = 0;
    for(var j=0;j < col; j++){
        for(var i=1; i< row; i++){
            if(strs[i - 1][j] > strs[i][j]){
                ans++;
                break;
            }
        }
    }

    return ans;

};
// @lc code=end

