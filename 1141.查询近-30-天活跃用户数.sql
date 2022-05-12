--
-- @lc app=leetcode.cn id=1141 lang=mysql
--
-- [1141] 查询近30天活跃用户数
--

-- @lc code=start
# Write your MySQL query statement below
select activity_date day, count(distinct user_id) active_users
from activity
where datediff('2019-07-27', activity_date) < 30
group by activity_date
-- @lc code=end

