/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;

    var queue = []
    queue.push(root)

    var depth = 1;

    while (queue.length) {
        var len = queue.length;

        for (var i = 0; i < len; i++) {
            var current = queue.shift()

            if (current.left === null && current.right === null) {
                return depth;
            }

            
            current.left && queue.push(current.left)
            current.right && queue.push(current.right)

        }
        depth++
    }

    return depth
};
// @lc code=end

