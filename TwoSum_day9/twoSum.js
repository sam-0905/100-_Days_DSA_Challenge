// Brute force method 
// Time complexity O(n^2)
// space complexity O(n)

function twoSum(arr, target){

    for(let i=0; i<arr.length; i++){
        for(let j = i+1; i<arr.length; i++){
            if(arr[i] + arr[j] === target){
                return [arr[i] , arr[j]]
            }
        }
    }

    return []

}


// optimized way 

function checkTwoSumNum(arr,target){

    const seen = new Set()

    for(const num of arr){
        const needed = seen - target

        if(seen.has(needed)){
            return [needed,num]
        }
        seen.add(num)
    }
    return []
}