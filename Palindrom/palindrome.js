// Brute force method
// Time complexity - O(n)
// Space complexity - O(n) 

function isPalindrome(arr){
    let rev = []
    for(let i=arr.length-1; i>0; i--){
        rev.push(arr[i])
    }
    
    if(rev === arr){
        return true
    }
    else{
        return false
    }
}


// optimized method 
// Time complexity - O(n)
// Space complexity - O(1) 

function isPalindrome1(arr){
    let left =0;
    let right = arr.length-1

    while(left<right){
        if(arr[left] !== arr[right]){
            return false
        }
    left++
    right--
    }
    return true
    
}

// Using reverse method

function checkPalindrome(arr){

    const revArr = arr.split('').reverse().join()

    return revArr === arr
}