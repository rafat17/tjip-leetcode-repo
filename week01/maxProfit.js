
// Time Complexity: 0(n)
// Space Complexity: 0(1)

var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0]

    for(let i=0; i<prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }

        const currentProfit = prices[i] - minPrice

        if(currentProfit > maxProfit){
            maxProfit = currentProfit
        }
    }

    return maxProfit 
};