--
-- @lc app=leetcode.cn id=595 lang=mysql
--
-- [595] 大的国家
--

-- @lc code=start
# Write your MySQL query statement below
select name, population, area from world where area >= 3000000 OR population >= 25000000
-- @lc code=end

