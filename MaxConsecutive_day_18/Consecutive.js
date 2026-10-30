// brute force method

// Time Complexity: O(n^2)
// space Complexity: O(1)

function findMaxConsecutive(arr) {
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] === 1) {
                count++;
                maxCount = Math.max(maxCount, count);
            } else {
                break;
            }
        }
    }

    return maxCount;
}


// optimized method

// Time Complexity: O(n)
// space Complexity: O(1)

function maxConsecutiveOnes(arr){
    let maxCount = 0
    let count =0 

    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1){
            count++
            maxCount = Math.max(maxCount,count)
        }else{
            count = 0
        }
    }
return maxCount
}


// Sliding approach


// Time Complexity: O(n)
// space Complexity: O(1)

function maxConsecutive_Ones(arr) {
    let left = 0;
    let maxCount = 0;

    for (let right = 0; right < arr.length; right++) {

        if (arr[right] === 0) {
            left = right + 1;
        }

        maxCount = Math.max(maxCount, right - left + 1);
    }

    return maxCount;
}
