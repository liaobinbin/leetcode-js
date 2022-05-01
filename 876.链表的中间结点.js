/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var slow = head;
    var fast = head;
    
    while(fast != null && fast.next !== null){
        // 慢指针走一步，快指针走两步
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
    

};
// @lc code=end

