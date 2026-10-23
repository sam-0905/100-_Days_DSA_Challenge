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


// Two pointer method

// space complexity: O(n+m)
// time complexity: O(nlogn + mlogm)

function twoPointerIntersection(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}