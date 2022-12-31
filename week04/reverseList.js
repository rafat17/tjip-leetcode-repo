// Time Complexity: O(n), n = number of nodes in the list
// Space Complexity: O(1)


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
const reverseList = head => {
    let currentNode = head
    let previousNode = null

    while(currentNode !== null){
        const nextNode = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = nextNode    
    }

    return previousNode  
};