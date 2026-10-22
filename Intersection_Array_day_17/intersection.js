// Brute force method

// space complexity: O(n*m)
// time complexity: O(n*m)

function intersectionArrays(arr1, arr2) {
    const intersectionArr = [];

    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j] && !intersectionArr.includes(arr1[i])){
                intersectionArr.push(arr1[i]);
                break;
            }
        }
    }
    return intersectionArr;
}
