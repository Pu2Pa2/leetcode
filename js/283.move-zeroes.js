/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// eslint-disable-next-line no-unused-vars
var moveZeroes = function(nums) {
    let len = nums.length;
    let i = 0;
    while (i < len) {
        if (nums[i] !== 0) {
            i++;
            continue;
        }

        nums.push(0);
        nums.splice(i, 1);
        len--;
    }
};
// @lc code=end
