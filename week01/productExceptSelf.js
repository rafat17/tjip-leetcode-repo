// Time Complexity: O(n)
// Space Complexity: O(n)


var multiplyNumber = (num1, num2) => {
    if (num1 * num2 === 0) return 0

    return num1 * num2
}

var productExceptSelf = function(nums) {
    const prefixArr = [...nums]
    const postfixArr = [...nums]
    const answer = []

    for(let i=0; i<nums.length;i++){
        if(i !== 0){
            prefixArr[i] = multiplyNumber(prefixArr[i], prefixArr[i - 1])
        }
    }

    for(let i=nums.length - 1; i >= 0; i--){
        if(i !== nums.length - 1){
            const postfixProduct = multiplyNumber(postfixArr[i], postfixArr[i + 1])
            postfixArr[i] = postfixProduct
        }
    }

    nums.forEach((item, index) => {
        if(index === 0){
            answer.push(postfixArr[index + 1])
        }

        else if(index === nums.length - 1){
            answer.push(prefixArr[index - 1])
        }

        else {
             const product = multiplyNumber(prefixArr[index - 1], postfixArr[index + 1])
             answer.push(product)
        }
    })

    return answer

};