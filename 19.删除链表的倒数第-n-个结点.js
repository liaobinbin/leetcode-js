/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function findFromEnd(head, n){
    var p1 = head;
    var p2 = head;
    // 先走n步，得到 k - n
    for(var i=0; i<n; i++){
        p1 = p1.next;
    }


    while (p1 != null) {
        p1 =  p1.next;
        p2 =  p2.next;
    }
    return p2

}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(-1);
    dummy.next = head;

    // 得到第n个节点x
    var x = findFromEnd(dummy, n + 1);
    x.next = x.next.next;
    
    return dummy.next;
};
// @lc code=end

