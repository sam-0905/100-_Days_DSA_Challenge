// 🧩 Problem: Check if an Array is Sorted

// Brute force
// Time Complexity: O(n^2)
// space Complexity: O(1)

function isSorted(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                return false;
            }
        }
    }
    return true;
}


// Optimized
// Time Complexity: O(n)   
// space Complexity: O(1)

function isArraySorted(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    return true;
}
}


