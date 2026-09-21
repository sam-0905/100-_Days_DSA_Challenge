// Brute force method

// Time: O(n)
// Space: O(n)

function movesZeros(arr){
    let result = []
    let zeroCount =0

    for(num of arr){
        if(num === 0){
            zeroCount++
        }else{
            result.push(num)
        }
    }

    while(num > 0){
        result.push(0)
        zeroCount--
    }

    return result
}