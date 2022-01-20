/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
var reverseWords = function(s) {
    const words = s.split(' ');
    const reversedWords = [];
    for (let i = 0; i < words.length; i++) {
        let left = 0;
        let right = words[i].length - 1;
        let reverseWord = new Array(words[i].length);
        while (left <= right) {
            reverseWord[left] = words[i][right];
            reverseWord[right] = words[i][left];
            left++;
            right--;
        }
        reversedWords.push(reverseWord.join(''));
    }
    return reversedWords.join(' ');
};
// @lc code=end
