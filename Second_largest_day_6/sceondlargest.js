
// optimized solution
/**
 * Time Complexity: O(n)
 * space Complexity: O(1)
 * */ 
function secondLargest(arr) {

    if (arr.length < 2) {
        return null;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0; i<arr.length;i++){
        if(arr[i]> largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] != largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}