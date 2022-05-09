/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    var m = start.length;
    var n = bank.length;
    var adj = new Array(n).fill(0).map(() => new Array());
    var endIndex = -1;
    for (var i = 0; i < n; i++) {
        if (end === bank[i]) {
            endIndex = i;
        }
        for (var j = i + 1; j < n; j++) {
            var mutations = 0;
            for (var k = 0; k < m; k++) {
                if (bank[i][k] !== bank[j][k]) {
                    mutations++;
                }
                if (mutations > 1) {
                    break;
                }
            }
            if (mutations === 1) {
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }
    if (endIndex === -1) {
        return -1;
    }

    const queue = [];
    const visited = new Array(n).fill(0);
    let step = 1;
    for (let i = 0; i < n; i++) {
        let mutations = 0;
        for (let k = 0; k < m; k++) {
            if (start[k] != bank[i][k]) {
                mutations++;
            }
            if (mutations > 1) {
                break;
            }
        }
        if (mutations == 1) {
            queue.push(i);
            visited[i] = true;
        }
    }        
    while (queue.length) {
        const sz = queue.length;
        for (let i = 0; i < sz; i++) {
            const curr = queue.shift();
            if (curr === endIndex) {
                return step;
            }
            for (const next of adj[curr]) {
                if (visited[next]) {
                    continue;
                }
                visited[next] = true;
                queue.push(next);
            }
        }
        step++;
    }
    return -1;
};
// @lc code=end

