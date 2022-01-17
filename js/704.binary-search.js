'use strict';

// const nums = [-1, 0, 3, 5, 9, 12];
// const target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        // console.log("left :", left, "right :", right);
        const pivot = parseInt((left + right) / 2);
        // console.log("pivot :", pivot, "nums[pivot] :", nums[pivot]);
        if (target === nums[pivot]) {
            return pivot;
        } else {
            if (target < nums[pivot]) {
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
        }

    }

    return -1;
};

// console.log("result :", search(nums, target));