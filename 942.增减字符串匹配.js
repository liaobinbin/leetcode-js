/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    var res = []
    var l = s.length;
    var left = 0;
    var right = l;
    
    for(var i=0; i<l; i++){
        if(s[i] == "I"){
            res.push(left++)
        } else {
            res.push(right--)
        }
    }

    res.push(left)
    return res;
};
// @lc code=end

