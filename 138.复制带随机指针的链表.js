/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
 
/**
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function(head) {
//     var visited = {}
//     var  recur = function(node){
//         if(!node){
//             return null;
//         }

//         if(visited[node.val]){
//             return visited[node.val]
//         }

//         var res = new Node(node.val)
//         visited[node.val] = res

//         res.next = recur(node.next)
//         res.random = recur(node.random)

//         return res
//     }
    
//     return recur(head)
// };

const copyRandomList = head => {
    if (!head) return null;
    const m = new Map();
    let node = head;
    // 遍历旧节点，复制各节点值
    while (node) {
        m.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    // 遍历旧节点，复制连接关系
    while (node) {
        m.get(node).next = node.next ? m.get(node.next) : null;
        m.get(node).random = node.random ? m.get(node.random) : null;
        node = node.next;
    }
    return m.get(head);
};

// @lc code=end

