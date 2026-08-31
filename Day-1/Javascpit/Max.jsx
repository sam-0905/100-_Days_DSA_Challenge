// Brute force solution 

// Time and Space complexity is O(n)
let arr = [1,2,3,4,5,6]

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

// Built-in Math.max with Spread Operator (Fastest & Most Concise)

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * */ 

const findMax = (num) => Math.max(...num)

findMax(arr)


//Functional Approach using reduce()

/** 
 * Time Complexity: O(n)
 * Time Complexity: O(n)
*/

const findLargest  = (Max, cur) => cur > Max ? cur : Max