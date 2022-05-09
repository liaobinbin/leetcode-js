/*
 * @lc app=leetcode.cn id=370 lang=javascript
 *
 * [370] 区间加法
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

var getModifiedArray = function(length, updates){
    var nums = new Array(length).fill(0)
    var df = new Difference(nums)
    for(var update of updates){
        var i = update[0]
        var j = update[1]
        var val = update[2]
        df.increment(i,j, val)
    }

    return df.result()
}
// @lc code=end

