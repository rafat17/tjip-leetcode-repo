var majorityElement = function(nums) {
    nums.sort((a, b) => a - b)
    const index = Math.floor(nums.length/2)

    return nums[index]
};