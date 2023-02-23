/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
// 向上转动一次加1
/**
 * 
 * @param {string} password 
 * @param {number} position 
 */
function plusOne(password, position) {
    const charList = password.split('')
    if (charList[position] === '9') {
        charList[position] = '0'
    } else {
        charList[position] = +charList[position] + 1;
    }

    return charList.join('')
}

// 向下转动一次加1
/**
 * 
 * @param {string} password 
 * @param {number} position 
 */
function minusOne(password, position) {
    const charList = password.split('')
    if (charList[position] === '0') {
        charList[position] = '9'
    } else {
        charList[position] = charList[position] - 1;
    }

    return charList.join('')
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    if (deadends.includes('0000')) return -1;
    var queue = ["0000"]

    // 记录已经测试过的值很重要，否则会死循环
    var visited = new Set(["0000", ...deadends])

    var step = 0

    while (queue.length) {
        var len = queue.length;

        for (var i = 0; i < len; i++) {

            var current = queue.shift();

            if (current === target) {
                return step;
            }


            for (var j = 0; j < 4; j++) {
                var up = plusOne(current, j)
                var down = minusOne(current, j)

                if (!visited.has(up)) {
                    queue.push(up)
                    visited.add(up)
                }

                if (!visited.has(down)) {
                    queue.push(down)
                    visited.add(down)
                }
            }

        }
        step++;
    }


    // 如果最后都没有找到的话，则返回-1
    return -1;

};
// @lc code=end

