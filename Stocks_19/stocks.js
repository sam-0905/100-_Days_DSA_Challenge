// brute force method
// Time Complexity: O(n^2)
// space Complexity: O(1)

function findMaxProfit (arr) {
    let maxProfit = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
         let profit = arr[j] - arr[i]
         maxProfit = Math.max(maxProfit, profit)
        }
    }

    return maxProfit
}   



// optimized method

// Time Complexity: O(n)
// space Complexity: O(1)

function maxProfit(arr){
    let minPrice = Infinity
    let maxProfit = 0

    for(let i=0; i<arr.length; i++){
        if(arr[i] < minPrice){
        minPrice = arr[i]
        }else{
            let profit = arr[i] - minPrice
            maxProfit = Math.max(maxProfit, profit)
        }

    }

    return maxProfit
}

// optimized greedy method

// Time Complexity: O(n)
// space Complexity: O(1)


function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);

        let profit = prices[i] - minPrice;

        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}