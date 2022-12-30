// Time Complexity: O(n), n = number of nodes in the linked list
// Space Complexity: O(n)

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

var removeNthFromEnd = function (head, n) {
  let size = 1;
  let currentNode = head;

  while (currentNode.next !== null) {
    size++;
    currentNode = currentNode.next;
  }

  const nodeRemovalPosition = size - n + 1;
  let currentPosition = 1;
  currentNode = head;

  if (nodeRemovalPosition === currentPosition) {
    head = currentNode.next;
    return head;
  }

  while (currentPosition + 1 !== nodeRemovalPosition) {
    currentNode = currentNode.next;
    currentPosition++;
  }

  currentNode.next = currentNode.next.next;

  return head;
};
