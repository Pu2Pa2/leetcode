/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
var sortedSquares = function(nums) {
    // return nums.map(num => Math.pow(num, 2)).sort((a, b) => a -b);
    let result = [];
    let l = 0;
    let r = nums.length - 1;
    let p = r;

    while (l <= r) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[p--] = nums[l++] ** 2;
        } else {
            result[p--] = nums[r--] ** 2;
        }
    }

    return result;
};
// @lc code=end

