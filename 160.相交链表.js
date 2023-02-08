/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while(p1 != p2){
        if(p1 == null) {
            p1 = headB;
        } else {
            p1 = p1.next;
        }

        if(p2 == null){
            p2 = headA
        } else {
            p2 = p2.next;
        }
    }

    return p1;
    
};
// @lc code=end

