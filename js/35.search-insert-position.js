/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (target === nums[mid]) {
            return mid;
        }

        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
// @lc code=end
