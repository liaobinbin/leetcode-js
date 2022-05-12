--
-- @lc app=leetcode.cn id=1729 lang=mysql
--
-- [1729] 求关注者的数量
--

-- @lc code=start
# Write your MySQL query statement below
select distinct(user_id), count(follower_id) as follower_count
from Followers
group by user_id
order by user_id
-- @lc code=end

