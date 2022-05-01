/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var successor = null;
var reverseList =  function(head, n){
    if(n == 1){
        // 记录到第N+1的节点
        successor = head.next;
        return head;
    }
    var last  = reverseList(head.next, n -1);

    head.next.next = head;
    
    head.next = successor;
    return last;
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left == 1) {
        return reverseList(head, right)
    }
    head.next = reverseBetween(head.next, left -1, right -1)
    return head;

};
// @lc code=end

