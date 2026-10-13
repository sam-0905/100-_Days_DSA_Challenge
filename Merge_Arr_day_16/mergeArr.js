// Brute force method
// Time complexity: O((n+m)log(n+m))
// Space complexity: O(n+m)

function mergeArrays(arr1, arr2) { 
    // const mergedArr = arr1.concat(arr2);
    const mergedArr = [...arr1, ...arr2];
    mergedArr.sort((a, b) => a - b);
    return mergedArr;
}

// Two pointer method
// Time complexity: O(n+m)
// Space complexity: O(n+m)


function mergeArraysTwoPointer(arr1, arr2) {
    const mergedArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
    // ...Repeats the comparison until one array runs out of elements.We then append any remaining elements, because each input array is already sorted.


    if(arr1[i] < arr2[j]){
        mergedArr.push(arr1[i]);
        i++;
    }else{
        mergedArr.push(arr2[j]);
        j++;
    }
    }

    // Push remaining elements from arr1
        while(i <arr1.length){
            mergedArr.push(arr1[i]);
            i++;
        }

        while(j < arr2.length){
            mergedArr.push(arr2[j]);
            j++;
        }

    return mergedArr;
}
