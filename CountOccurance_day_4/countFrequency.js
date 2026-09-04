// Brute fore method 

// Time complexity : O(n^2)
// Space complexity : O(n) 

arr = [1,1,2,3,4,5,6,4]

function countFrequency(arr){
    let seen = [];
    let result = {}

    for(let i=0; i<arr.length; i++){
        if(seen.includes(arr[i])){
            continue;
        }
    let count = 0

    for(let j =0; i,arr.length; j++){
        if(arr[i] === arr[j]){
            count ++
        }
    }

    result[arr(i)] = count;
    seen.push(arr[i])
    }

    return result 

}