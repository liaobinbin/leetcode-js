/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var PriorityQueue = function(priority){
    this._items = [] 
    this._priority = priority;

}

PriorityQueue.prototype.isEmpty = function () {
    return this._items.length == 0;
}

PriorityQueue.prototype.add = function (list){
    if(this.isEmpty()){
        this._items.push(list)
    } else {
        
        var added = false;
        for(var i=0; i< this._items.length; i++){
            // 因为是最小堆，那么如果a减去b的值为真，那么说明b的值比a小，然后将其插入到a的前面
            if(this._priority(this._items[i], list) > 0){
                this._items.splice(i,0,list)
                added = true;
                break;
            }
            
        }
        if(!added){
            this._items.push(list)
        }
    }
}

// 取出最小值，并将其移除
PriorityQueue.prototype.poll = function(){
    var min = this._items.shift() 
    return min
}

var mergeKLists = function(lists) {
    if(lists.length == 0) return null;
    // 虚拟头节点
    var dummy = new ListNode(-1);
    var p = dummy;
    
    var pq = new PriorityQueue(function(a, b){
        return a.val - b.val;
    })

    // 先把三个链条的头最小值排序, 插入到优先级队列
    for(head of lists){
        if(head != null){
            pq.add(head)
        }
    }

    while(!pq.isEmpty()){
        // 获取最小节点，接到结果链表中
        var node = pq.poll()
        p.next = node;
        if(node.next != null){
            pq.add(node.next)
        }
        p = p.next;
        
    }
    return dummy.next;

};
// @lc code=end

