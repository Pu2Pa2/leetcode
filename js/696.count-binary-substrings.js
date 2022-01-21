/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var countBinarySubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const start = s[i];
        let firstCount = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (s[j] === start) {
                firstCount++;
                continue;
            } else {
                break;
            }
        }

        let secondCount = 0;
        for (let j = i + firstCount; j < i + firstCount + firstCount && j < s.length; j++) {
            if (s[j] !== start) {
                secondCount++;
            } else {
                break;
            }
        }

        if (firstCount === secondCount) {
            count++;
        }
    }
    return count;
};
// @lc code=end
