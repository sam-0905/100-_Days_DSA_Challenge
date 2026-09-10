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

// ⚡ Floyd's Cycle Detection — Find the Duplicate


// Time Complexity: O(n)
// Space Complexity: O(1)

function findDuplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];

    // Phase 1: Find a meeting point inside the cycle
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while (slow !== fast);

    // Phase 2: Find the entrance of the cycle
    slow = arr[0];

    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow;
}

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
