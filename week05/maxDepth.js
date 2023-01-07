// Time Complexity: O(logn), n = number of nodes in binary tree
// Space Complexity: O(logn)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var calculateBSTDepth = function (currentNode, depth) {
  if (currentNode === null) {
    return depth;
  }

  depth++;

  return Math.max(
    calculateBSTDepth(currentNode.left, depth),
    calculateBSTDepth(currentNode.right, depth)
  );
};

var maxDepth = function (root) {
  let initialDepth = 0;
  if (root === null) return initialDepth;

  return calculateBSTDepth(root, initialDepth);
};
