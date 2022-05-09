/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = new Array()
    if(root == null){
        return result;
    }
    var queue = new Array()
    queue.push(root)

    while(queue.length !== 0){
        var l = queue.length
        var level = new Array()
        for(var i=0;i<l; i++){
            var node = queue.shift()
            level.push(node.val)
            if(node.left != null){
                queue.push(node.left)
            }
            if(node.right != null){
                queue.push(node.right)
            }
        }
    result.push(level)
    }
    return result;
};
// @lc code=end

