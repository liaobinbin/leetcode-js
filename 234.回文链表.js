/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


// 如果是回文字符串，那么直接利用reverse反转字符串后，判断与原字符串是否相等即可
// 回文链表参考类似思路，生成一个反转后的链表，然后进行判断相等
// 提高效率的方法，就是先寻找到链表中点，然后反转后半部分链表，与前半段链条判断是否相等

function reverse(head){
    var pre = null;
    var cur = head;
    while(cur != null) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var slow = head;
    var fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast != null){
        slow = slow.next;
    }

    var left = head;
    var right = reverse(slow)
    while(right != null) {
        if(left.val != right.val) return false;
        left = left.next;
        right = right.next;
    }
    // 还原对原链表的影响
    left.next = reverse(right)
    return true;

};
// @lc code=end

