/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
class Difference {
    constructor(nums) {
        if (nums.length <= 0) {
            console.warn('nums length must not to be 0');
            return
        }
        this.diff = new Array(nums.length)
        // make difference array
        this.diff[0] = nums[0]
        for (var i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1]
        }
    }

    increment(i, j, val) {
        this.diff[i] += val;
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val
        }
    }

    result() {
        var res = new Array(this.diff.length)
        res[0] = this.diff[0]

        for (var i = 1; i < this.diff.length; i++) {
            res[i] = res[i - 1] + this.diff[i]
        }
        return res
    }
}

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    var nums = new Array(1001).fill(0)    
    var df = new Difference(nums)

    for(trip of trips){
        var val = trip[0]

        var i = trip[1]
        var j = trip[2] - 1
        df.increment(i,j,val)
    }
    
    var res = df.result()

    for(var i of res){
        if(capacity < i) {
            return false;
        }
    }

    return true
};
// @lc code=end

