// Brute force method

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function duplicate(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                return arr[i]
            }
    }
}
return null;
}

// optimized method



// using set data structure

// Time Complexity: O(n)
// Space Complexity: O(n)

function duplicateOptimized(arr){
    let set = new Set();

    for(let i=0; i<arr.length; i++){
        if(set.has(arr[i])){
            return arr[i]
        }
        set.add(arr[i])
}
    return null;
}
