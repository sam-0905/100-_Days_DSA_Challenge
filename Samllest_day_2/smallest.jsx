// Brute force method

// Time Complexity: O(n^2)
// Space Complexity: O(1)

let arr = [11,2,33,4,55,6]

function findSmallestNum(arr){

    if(arr.length === 0){
        return null
    }

    for(let i=0; i<arr.length; i++){

    let isSmallest = true;

    for(let j = 0; j<arr.length; j++){
        
        if(arr[j] < arr[i]){
            isSmallest = false
            break
        }
    }
     if(isSmallest){
        return arr[i]
    }
  }

}


// Track minimum number in the array

// Time Complexity: O(n)
// Space Complexity: O(1)


function findSmallest(arr) {
    if(arr.length === 0){
        return null
    }
    let smallest = arr[0];
     for(let i=0; i<arr.length;i++){
        if(arr[i]< smallest){
            smallest = arr[i]
        }
     }
     return smallest
}



// Using built-in sort method

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function findSmallest(arr){
    const sortedArr = arr.sort((a,b) => a-b)
    return sortedArr[0]
}