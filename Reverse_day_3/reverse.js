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


// optimized approach

//  Time Complexity: O(n)
//  Space Complexity: O(1)


function reverseArrayOptimized(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}


// v2

function reverseArrayV2(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}


// Using built-in methods

function reverseArrayBuiltIn(arr) {
    return arr.reverse();
}
