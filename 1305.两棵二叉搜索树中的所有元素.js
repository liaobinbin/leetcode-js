/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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

function BSTIterator(root) {
    this.stk = new Stack()
    this.pushLeftBranch(root)
}

BSTIterator.prototype.pushLeftBranch = function(p){
    while(p!=null){
        this.stk.push(p)
        p = p.left;
    }
}

BSTIterator.prototype.peek = function(){
    return this.stk.peek().val
}

BSTIterator.prototype.next = function(){
    var p = this.stk.pop()
    this.pushLeftBranch(p.right)
    return p.val
}
BSTIterator.prototype.hasNext = function(){
    return !this.stk.isEmpty();
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    var t1 = new BSTIterator(root1)
    var t2 = new BSTIterator(root2)
    
    var res = []
    while(t1.hasNext() && t2.hasNext()){
        if(t1.peek() > t2.peek()){
            res.push(t2.next())
        } else {
            res.push(t1.next())
        }
    }

    while(t1.hasNext()){
        res.push(t1.next())
    }
    while(t2.hasNext()){
        res.push(t2.next())
    }
    return res
};
// @lc code=end

