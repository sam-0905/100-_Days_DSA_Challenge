let arr = [1,2,3,4,5,6]

// Brute force solution 
/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */ 

for(let i=0; i<arr.length; i++){
    isLargest = true

    for(let j=0; j<arr.length; j++){
        if(arr[j] > arr[i]){
            isLargest = false
            break
        }
    }
    if(isLargest){
        return arr[i]
    }
}


// Track Maximum 🚀
/** 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */ 

function findMaxNum(num){
    let max = -Infinity

    for(let i=0;i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

findMaxNum(arr)


