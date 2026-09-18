// Brute force method 
// Time complexity O(n^2)
// space complexity O(n)

function twoSum(arr, target){

    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i] , arr[j]]
            }
        }
    }

    return []

}


// optimized way 

// Time complexity O(n)
// space complexity O(n)

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


// Sorting method 
// Time: O(n log n)


function twoSumSort(arr,target){
 let left =0
 let right = arr.length-1

 while(left<right){
    const sum = arr[left] + arr[right]

    if(sum === target){
        return [arr[left],arr[right]]
    }

    if(sum >target){
        right --;
    }else{
        left++
    }
 }

 return []
}