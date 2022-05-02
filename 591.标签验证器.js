/*
 * @lc app=leetcode.cn id=591 lang=javascript
 *
 * [591] 标签验证器
 */

// @lc code=start
/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
    const n = code.length;
    const tags = [];

    let i = 0;
    while (i < n) {
        if (code[i] === '<') {
            // 如果<是最后一个字符串 返回false
            if (i === n - 1) {
                return false;
            }
            // 如果下一个字符串是/ 进入闭合标签逻辑
            if (code[i + 1] === '/') {
                // 从i开始寻找>字符串
                const j = code.indexOf('>', i);
                // 如果找不到则返回false
                if (j < 0) {
                    return false;
                }
                // 从</后到>的位置进行截断，找到tagName
                const tagname = code.slice(i + 2, j);
                // 寻找开头的标签并且需要相等，如果找不到返回false
                if (tags.length === 0 || tags[tags.length - 1] !== tagname) {
                    return false;
                }
                // 满足以上条件后，说明闭合标签没问题，然后将该标签弹出
                tags.pop();
                // 并且从将i跳到标签的结尾
                i = j + 1;
                // 如果i还没有走到字符串的最后，但是这个时候标签数量为空，那么返回false
                if (tags.length === 0 && i !== n) {
                    return false;
                }
                // 如果<后面的是! 那么进入如下逻辑
            } else if (code[i + 1] === '!') {
                // 如果<![[]]>标记没有在正常标签内部，那么返回false
                if (tags.length === 0) {
                    return false;
                }
                
                // 如果超出字符串长度，那么返回false
                // 从<![CDATA]>开始，
                if (i + 9 > n) {
                    return false;
                }
                // 如果!后面的指定值字符串与预设的不相等，返回false
                const cdata = code.slice(i + 2, i + 9);
                if ("[CDATA[" !== cdata) {
                    return false;
                }
                // 寻找]]>标签的结尾
                const j = code.indexOf("]]>", i);
                // 没找到返回false
                if (j < 0) {
                    return false;
                }
                //找到了则从j的后面开始
                i = j + 1;
            } else {
                // 正常标签的开头,找到>结尾的地方
                const j = code.indexOf('>', i);
                // 找不到返回false
                if (j < 0) {
                    return false;
                }
                // 得到tagname
                const tagname = code.slice(i + 1, j);
                // 判断tagname是否长度合规
                if (tagname.length < 1 || tagname.length > 9) {
                    return false;
                }
                // 判断是否为大写字符A-Z
                for (let k = 0; k < tagname.length; ++k) {
                    if (!(tagname[k] >= 'A' && tagname[k] <= 'Z')) {
                        return false;
                    }
                }
                // 合规的情况下向tags增加该标签
                tags.push(tagname);
                // i从标签结尾的后面开始
                i = j + 1;
            }
        } else {
            if (tags.length === 0) {
                return false;
            }
            ++i;
        }
    }

    // 当循环完毕后，标签肯定是成对抵消完，如果长度为0则为真，如果没有对应的闭合标签，那么返回false
    return tags.length === 0;
};
// @lc code=end

