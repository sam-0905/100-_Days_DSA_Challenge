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


// Set method 

// space complexity: O(n+m)
// time complexity: O(n+m)

function setIntersection(arr1, arr2) {

    const set1 = new Set(arr1);

    const result = []

    for(let i=0; i<arr2.length; i++){
        if(set1.has(arr2[i])){
            result.push(arr2[i]);
            set1.delete(arr2[i]); // to avoid duplicates in the result
        }
    }

    return result;

}