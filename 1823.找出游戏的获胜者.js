/*
 * @lc app=leetcode.cn id=1823 lang=javascript
 *
 * [1823] 找出游戏的获胜者
 */

// @lc code=start
var findOneLoser = function (players, k) {
    var n = players.length;
    var curK = k
    while (curK > n) {
        curK -= n;
    }
    var beforePlayer = players.splice(0, curK)
    //移除最后一位
    beforePlayer.pop();
    // 将前面的移动到后面
    for (var play of beforePlayer) {
        players.push(play)
    }
    if (players.length > 1) {
        findOneLoser(players, k)
    }
}
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    if(n == 1){
        return n
    }
    var players = []
    // 得到玩家列表
    for (var i = 1; i <= n; i++) {
        players.push(i)
    }

    findOneLoser(players, k)

    return players[0]

};
// 官方题解
// var findTheWinner = function(n, k) {
//     const queue = [];
//     for (let i = 0; i <= n; i++) {
//         queue.push(i);
//     }
//     while (queue.length > 0) {
//         for (let i = 0; i < k; i++) {
//             queue.push(queue.shift());
//         }
//         queue.shift();
//     }
//     return queue[-1];
// };


// var findTheWinner = function(n, k) {
//     if (n === 1) {
//         return 1;
//     }
//     return (k + findTheWinner(n - 1, k) - 1) % n + 1;
// };

// var findTheWinner = function(n, k) {
//     let winner = 1;
//     for (let i = 2; i <= n; i++) {
//         winner = (k + winner - 1) % i + 1;
//     }
//     return winner;
// };

// @lc code=end

