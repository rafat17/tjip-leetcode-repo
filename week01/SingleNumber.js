// Time Complexity: 0(n)
// Space Complexity: 0(1)

var singleNumber = function(nums) {
    let xor_number = 0
    for(let i=0; i < nums.length; i++){
        xor_number = xor_number ^ nums[i]
    }

    return xor_number
};
