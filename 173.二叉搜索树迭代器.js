/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
function Stack() {
    this.items = []

    this.push = function (element) {
        this.items.push(element)
    }

    this.pop = function () {
        return this.items.pop()
    }

    this.peek = function () {
        return this.items[this.items.length - 1]
    }

    this.isEmpty = function () {
        return this.items.length == 0;
    }
    this.size = function () {
        return this.items.length;
    }
    this.toString = function () {
        var str = ""
        for (var i of this.items) {
            str += i + ' ';
        }
        return str
    }

}
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stk = new Stack()
    this.pushLeftBranch(root)
};


BSTIterator.prototype.pushLeftBranch = function(p){
    while (p != null) {
        this.stk.push(p)
        p = p.left;
    }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    var p = this.stk.pop()
    this.pushLeftBranch(p.right)
    return p.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return !this.stk.isEmpty()
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

