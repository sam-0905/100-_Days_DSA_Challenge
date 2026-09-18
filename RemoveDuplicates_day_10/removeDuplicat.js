// Brute force method

// Time: O(n²)
// Space: O(n)

function removeDuplicates(arr){

    const result = []

    for(num of arr){
    if(!result.includes(num)){
        result.push(num)
    }
    }
    return result
}