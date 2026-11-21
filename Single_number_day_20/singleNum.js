// Brute force method
// Time Complexity: O(n^2)
// Space Complexity: O(1)


function singleNum(arr){
    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count === 1){
            return arr[i];
        }
    }
}

// Hashing method
// Time Complexity: O(n)
// Space Complexity: O(n)

function singleNumHash(arr){
    let hash = {}; 
    for(num of arr){
        hash[num] = (hash[num] || 0) + 1;
    }
    for(num in hash){
        if(hash[num] === 1){
            return parseInt(num);
        }
    }
}