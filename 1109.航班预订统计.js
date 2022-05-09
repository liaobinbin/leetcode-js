/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
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
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    var nums = new Array(n).fill(0)
    
    var df = new Difference(nums)

    for(var booking of bookings){
        var i = booking[0] - 1;
        var j = booking[1] - 1;

        var val  = booking[2]
        df.increment(i,j,val)
    }

    return df.result()

};
// @lc code=end

