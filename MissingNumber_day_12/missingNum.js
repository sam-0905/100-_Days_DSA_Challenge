// Brute force method


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

function findMissingNumber(arr){
        const n = arr.length

        const expectedSum = n *(n +1 ) / 2

        let actualNum = 0

        for(num of arr){
         actualNum += num
        }
        return expectedSum - actualNum
}