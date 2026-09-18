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


// optimized approach

function removeDuplicatesArr(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

// Notice something important: this version returns the number of unique elements, not a new array.

const arr = [1, 1, 2, 2, 3, 4, 4];

const k = removeDuplicates(arr);

console.log(k);              // 4
console.log(arr.slice(0, k)); // [1, 2, 3, 4]


// Using set 
// Time: O(n) 
// Space: O(n)


function checkDuplicate(arr){
    return[...new Set(arr)]
}