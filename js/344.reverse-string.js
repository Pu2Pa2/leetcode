/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// eslint-disable-next-line no-unused-vars
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left++], s[right--]] = [s[right], s[left]];
    }
};
// @lc code=end
