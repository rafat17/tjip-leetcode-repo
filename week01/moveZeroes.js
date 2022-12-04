// Time Complexity: 0(N)
// Space Complexity: 0(1)

var moveZeroes = function(nums) {
    let nonZeroIndex
    for(let i=nums.length - 1; i >= 0; i--){
        if(nums[i] !== 0) {
            nonZeroIndex = i
            break
        }
    }

    for(let i=nonZeroIndex - 1; i>=0; i--){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
        }
    }
};