/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function palindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[left] == str[right]) {
        left--;
        right++;
    }

    return str.substring(left + 1, right)

}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var res = ''
    for(var i=0; i<s.length; i++){
        // 调用两次是偶数和奇数的情况
        var s1 = palindrome(s, i, i)
        var s2 = palindrome(s, i, i+1)

        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }

    return res
};
// @lc code=end

