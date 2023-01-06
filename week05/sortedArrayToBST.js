// Time Complexity: O(logn), n = number of nodes in the binary tree 
// Space Complexity: 0(logn)  


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var constructBSTFromArray = function(numsArray, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return null

    const midIndex = Math.floor((leftIndex + rightIndex)/2)

    const newNode = new TreeNode(numsArray[midIndex])
    newNode.left = constructBSTFromArray(numsArray, leftIndex, midIndex - 1)
    newNode.right = constructBSTFromArray(numsArray, midIndex + 1, rightIndex)
    return newNode 
}

var sortedArrayToBST = function(nums) {
    if(!nums || nums.length === 0) return null

    return constructBSTFromArray(nums, 0, nums.length - 1) 
};