// Time Complexity: O(nlogn)
// Space Complexity: 0(logn)

var findKthLargest = function(nums, k) {
    nums.sort((a, b) => a - b)

    return nums[nums.length - k]
};
