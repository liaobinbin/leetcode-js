/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 递归
function reverse(start, end){
    var pre,cur,nxt;
    pre = null;
    cur = start;
    nxt = start;

    while(cur != end){
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }

    return pre
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(head == null) return null;
    var a = head;
    var b = head;
    // 通过循环获得区间节点a, b， 如果长度不够则直接return原结点
    for(var i =0; i< k; i++){
        if(b==null) return head;
        b = b.next;
    }

    var newHead = reverse(a, b)
    a.next = reverseKGroup(b, k)
    return newHead;

};
// @lc code=end

