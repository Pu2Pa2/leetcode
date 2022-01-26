/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
 * @return {ListNode}
 */
var middleNode = function(head) {
    const nodeCount = getNodeCount(head);
    const middleNode = Math.floor(nodeCount/2) + 1;
    console.log(nodeCount, middleNode);
    let node = head;
    for(let count = 1; count < middleNode; count++) {
        node = node.next;
    }
    return node;
};

function getNodeCount(node) {
    let nodeCount = 1;
    let next = node.next;
    while (next !== null)  {
        nodeCount++;
        next = next.next;
    }
    return nodeCount;
}
// @lc code=end

