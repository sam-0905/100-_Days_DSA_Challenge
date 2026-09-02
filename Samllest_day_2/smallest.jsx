// Brute force method

// Time Complexity: O(n^2)
// Space Complexity: O(1)

let arr = [11,2,33,4,55,6]

function findSmallestNum(arr){

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