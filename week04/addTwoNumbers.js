// Time Complexity: O(n), n = number of nodes of linked list
// Space Complexity: O(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1CurrentNode = l1;
  let l2CurrentNode = l2;

  let carry = 0;
  let newList;
  let currentNewListNode;

  while (l1CurrentNode || l2CurrentNode) {
    const l1NodeValue = l1CurrentNode ? l1CurrentNode.val : 0;
    const l2NodeValue = l2CurrentNode ? l2CurrentNode.val : 0;
    let total = carry + l1NodeValue + l2NodeValue;

    if (total > 9) {
      carry = 1;
      total = total % 10;
    } else {
      carry = 0;
    }

    if (!currentNewListNode) {
      newList = new ListNode(total);
      currentNewListNode = newList;
    } else {
      currentNewListNode.next = new ListNode(total);
      currentNewListNode = currentNewListNode.next;
    }

    if (l1CurrentNode) {
      l1CurrentNode = l1CurrentNode.next;
    }

    if (l2CurrentNode) {
      l2CurrentNode = l2CurrentNode.next;
    }
  }

  if (carry === 1) {
    currentNewListNode.next = new ListNode(carry);
  }

  return newList;
};
