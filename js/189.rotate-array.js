/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// eslint-disable-next-line no-unused-vars
var rotate = function(nums, k) {
    // solution 1. (Time Limit Exceeded)
    // for (let i = 0; i < k; ++i) {
    //     nums.unshift(nums.pop());
    // }

    // solution 2. (Time Limit Exceeded)
    // if (nums.length === k) {
    //     return;
    // }
    // else if (k < nums.length){
    //     for (let i = 0; i < k; ++i) {
    //         nums.unshift(nums.pop());
    //     }
    // } else /*k > nums.length*/{
    //     for (let i = 0; i < k - nums.length; ++i) {
    //         nums.unshift(nums.pop());
    //     }
    // }

    // solution 3.
    let moveCount = 0;
    if (nums.length === k || k === 0 || nums.length === 1) {
        return;
    } else if (k < nums.length) {
        moveCount = k;
    } else /* k > nums.length */ {
        moveCount = k % nums.length;
    }
    let p = nums.length - moveCount;
    const left = nums.splice(0, p);
    nums.push(...left);
    // for (let count = 0; count < left.length; ++count) {
    //     nums.push(left[count]);
    // }

};
// @lc code=end
