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



// Three pointer method
// Time complexity: O(n+m)
// Space complexity: O(1)


function mergeSortedArrays(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }

    return nums1;
}

console.log(
    mergeSortedArrays([1, 4, 7, 0, 0, 0], 3, [2, 3, 6], 3)
);
// [1, 2, 3, 4, 6, 7]