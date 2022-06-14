/*
 * @lc app=leetcode.cn id=436 lang=javascript
 *
 * [436] 寻找右区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
// var findRightInterval = function(intervals) {
//     var n = intervals.length;
//     var startIntervals = new Array(n).fill(0).map(()=> new Array(2).fill(0))

//     for(var i=0;i<n;i++){
//         startIntervals[i][0] = intervals[i][0]
//         startIntervals[i][1] = i
//     }
//     startIntervals.sort((o1,o2)=> o1[0] - o2[0])

//     var ans = new Array(n).fill(0)
//     for(var i=0;i<n;i++){
//         var left = 0;
//         var right = n -1;
//         var target = -1;

//         while(left<=right){
//             var mid = Math.floor((left, right) /2)
//             if(startIntervals[mid][0] >= intervals[i][1]){
//                 right = mid -1
//             } else {
//                 left = mid +1
//             }
//         }
//         ans[i] = target;
//     }
//     return ans

// };
var findRightInterval = function(intervals) {
    const n = intervals.length;
    const startIntervals = new Array(n).fill(0).map(() => new Array(2).fill(0));
    const endIntervals = new Array(n).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < n; i++) {
        startIntervals[i][0] = intervals[i][0];
        startIntervals[i][1] = i;
        endIntervals[i][0] = intervals[i][1];
        endIntervals[i][1] = i;
    }
    startIntervals.sort((o1, o2) => o1[0] - o2[0]);
    endIntervals.sort((o1, o2) => o1[0] - o2[0]);

    const ans = new Array(n).fill(0);
    for (let i = 0, j = 0; i < n; i++) {
        while (j < n && endIntervals[i][0] > startIntervals[j][0]) {
            j++;
        }
        if (j < n) {
            ans[endIntervals[i][1]] = startIntervals[j][1];
        } else {
            ans[endIntervals[i][1]] = -1;
        }
    }
    return ans;
};

// @lc code=end

