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

