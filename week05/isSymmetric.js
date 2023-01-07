// Time Complexity: O(n), n = number of nodes in the binary tree
// Space Complexity: O(h), h = height of the binary tree

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
 * @return {boolean}
 */

var checkSubTreeSymmetric = (leftNode, rightNode) => {
    if (leftNode === null && rightNode === null) return true

    if (leftNode !== null && rightNode !== null) {
        return leftNode.val === rightNode.val && checkSubTreeSymmetric(leftNode.right, rightNode.left) && checkSubTreeSymmetric(leftNode.left, rightNode.right)
    }

    return false
}

var isSymmetric = function (root) {
    if (root === null) return true

    return checkSubTreeSymmetric(root.left, root.right)
};