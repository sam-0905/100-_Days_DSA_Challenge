// Brute force approach

//  Time Complexity: O(n)
//  Space Complexity: O(n) 

function reverseArray(arr) {
    let reversedArr = [];

    for(let i = arr.length-1; i>=0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}


