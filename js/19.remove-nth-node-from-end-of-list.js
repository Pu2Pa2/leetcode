/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null && n === 1) {
        return null;
    }

    const nodeCount = (head) => {
        let count = 1;
        let node = head;
        while (node.next !== null) {
            count++;
            node = node.next;
        }
        return count;
    };

    let count = nodeCount(head);

    let node = head;
    let index = 0;
    const removeNodeIndex = count - n;
    while (node.next !== null) {
        if (node.next.next === null && n === 1) {
            node.next = null;
            break;
        }

        if (removeNodeIndex === 0) {
            head = node.next;
            break;
        }

        if (removeNodeIndex === index + 1) {
            node.next = node.next.next;
            break;
        }
        index++;
        node = node.next;
    }

    return head;
};
// @lc code=end

