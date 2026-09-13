// Brute force method

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