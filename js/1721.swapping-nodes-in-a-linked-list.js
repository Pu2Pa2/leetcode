/*
 * @lc app=leetcode id=1721 lang=javascript
 *
 * [1721] Swapping Nodes in a Linked List
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    const getValues = (node, k, values) => {
        values.push(node.val);

        if (node.next === null) {
            return [values[k - 1], values[values.length - k], values.length];
        }

        return getValues(node.next, k, values);
    };
    const getNode = (node) => { return node.next; };

    let node = head;
    let nodeIndex = 1;
    const [begin, end, nodeLength] = getValues(head, k, []);
    while (node !== null) {
        if (nodeIndex === k) {
            console.log('node.val', node.val, 'nodeIndex', nodeIndex);
            node.val = end;
        }
        if (nodeIndex === nodeLength - (k - 1)) {
            console.log('node.val', node.val, 'nodeIndex', nodeIndex);
            node.val = begin;
        }
        node = getNode(node);
        nodeIndex++;
    }

    return head;
};
// @lc code=end
