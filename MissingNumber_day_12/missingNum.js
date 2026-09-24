// Brute force method
// Time: O(n^2) 
// Space: O(1)

function checkTheMissingNum(arr){

    const n = arr.length

    for(let i=0; i<=n; i++){
        if(!arr.includes(num)){
            return num
        }
    }
    return -1
}


// Optimized method

// Time: O(n) 
// Space: O(1)

function findMissingNumber(arr){
        const n = arr.length

        const expectedSum = n *(n +1 ) / 2

        let actualNum = 0

        for(num of arr){
         actualNum += num
        }
        return expectedSum - actualNum
}

// using set method

// Time: O(n) 
// Space: O(n)

function  missingNum(arr){
    const seen = new Set(arr)

    for(let i =0; i<=n; i++){
        if(!seen.has(i)){
            return i
        }
    }
    return -1
} 