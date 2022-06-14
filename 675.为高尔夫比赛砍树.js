/*
 * @lc app=leetcode.cn id=675 lang=javascript
 *
 * [675] 为高尔夫比赛砍树
 */

// @lc code=start
/**
 * @param {number[][]} forest
 * @return {number}
 */
var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
var cutOffTree = function (forest) {
    var trees = []
    var row = forest.length;
    var col = forest[0].length;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (forest[i][j] > 1) {
                trees.push([i, j])
            }
        }
    }

    trees.sort((a, b) => forest[a[0]][a[1]] - forest[b[0]][b[1]])

    var cx = 0;
    var cy = 0;
    var ans = 0;
    for (var i = 0; i < trees.length; i++) {
        var steps = bfs(forest, cx, cy, trees[i][0], trees[i][1])
        if (steps === -1) {
            return -1
        }

        ans += steps;
        cx = trees[i][0]
        cy = trees[i][1]
    }
    return ans;
};

var bfs = (forest, sx, sy, tx, ty) => {
    if (sx === tx && sy === ty) {
        return 0
    }

    var row = forest.length;
    var col = forest[0].length;
    var step = 0;
    var queue = []

    var visited = new Array(row).fill(0).map(() => new Array(col).fill(0))
    queue.push([sx, sy])
    visited[sx][sy] = true;

    while (queue.length) {
        step++;
        var sz = queue.length;
        for (var i = 0; i < sz; i++) {
            var cell = queue.shift()
            var cx = cell[0], cy = cell[1]
            for (var j = 0; j < 4; j++) {
                var nx = cx + dirs[j][0]
                var ny = cy + dirs[j][1]
                if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
                    if (!visited[nx][ny] && forest[nx][ny] > 0) {
                        if (nx === tx && ny === ty) {
                            return step;
                        }
                        queue.push([nx, ny])
                        visited[nx][ny] = true;
                    }
                }
            }
        }
    }

    return -1
}
// @lc code=end

