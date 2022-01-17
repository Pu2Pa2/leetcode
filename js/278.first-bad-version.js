/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// eslint-disable-next-line no-unused-vars
const solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let min = 1;
        let max = n;
        while (min <= max) {
            const middle = Math.floor(min + (max - min) / 2);
            // console.log("middle :", middle);
            if (isBadVersion(middle)) {
                max = middle - 1;
            } else {
                min = middle + 1;
            }
            // console.log("min :", min, "max :", max);
        }

        return min;
    };
};
// @lc code=end

