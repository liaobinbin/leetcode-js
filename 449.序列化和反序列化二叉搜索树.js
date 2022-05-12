/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    var list = []
    var postOrder = (root, list) => {
        if (!root) {
            return;
        }
        postOrder(root.left, list)
        postOrder(root.right, list)
        list.push(root.val)
    }
    postOrder(root, list)
    var str = list.join(',')
    return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if(data.length === 0){
        return null;
    }
    
    var arr = data.split(',')
    var length = arr.length;
    var stack = []
    for(var i=0;i<length;i++){
        stack.push(parseInt(arr[i]))
    }

    const construct = (lower, upper, stack) =>{
        if(stack.length ===0 || stack[stack.length - 1] < lower || stack[stack.length -1] > upper){
            return null;
        }

        var val = stack.pop()
        
        var root = new TreeNode(val);
        root.right = construct(val, upper, stack)
        root.left = construct(lower, val, stack)
        return root;
    
    }

    return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stack)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

