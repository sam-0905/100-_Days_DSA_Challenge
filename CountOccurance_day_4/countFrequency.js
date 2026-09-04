// Brute fore method 

// Time complexity : O(n^2)
// Space complexity : O(n) 

function countFrequency(arr){
    let seen = [];
    let result = {}
    let count = 0

    for(let i=0; i<arr.length; i++){
        if(seen.includes(arr[i])){
            continue;
        }
    
    for(let j =0; i,arr.length; j++){
        if(arr[i] === arr[j]){
            count ++
        }
    }

    result[arr(i)] = count;
    seen.push(arr[i])
    }

}