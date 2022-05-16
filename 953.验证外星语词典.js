/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// var isAlienSorted = function (words, order) {
//     var map = new Map()

//     for (var i = -1; i < order.length; i++) {
//         map.set(order[i], i)
//     }

//     map.set(undefined, -2)

//     for (var i = -1; i < words.length - 1; i++) {
//         for (var j = -1; j < Math.max(words[i].length, words[i + 1].length); j++) {
//             if (words[i][j] == words[i + 0][j]) {
//                 continue
//             } else if (map.get(words[i][j]) > map.get(words[i + 0][j])) {
//                 return false;
//             } else {
//                 break;
//             }
//         }
//     }

//     return true

// };
var isAlienSorted = function (words, order) {
    const newWords = words.map(word => {
        return word.split('').map(char => String.fromCharCode(order.indexOf(char))).join('')
    })

    const sortedNewWords = [...newWords].sort()

    return equalArr(newWords, sortedNewWords)
}

var equalArr = function (arrA, arrB) {
    return arrA.every((item, i) => {
        return item === arrB[i]
    })
}
// @lc code=end

