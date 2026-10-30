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

