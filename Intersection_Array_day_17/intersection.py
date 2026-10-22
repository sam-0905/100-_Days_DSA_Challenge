# Brute force method

# space complexity: O(n*m)
# Time complexity: O(n*m)


def intersection(arr1, arr2):
    result = []
    for i in arr1:
        for j in arr2:
            if i == j and i not in result:
                result.append(i)
    return result

# set method

# space complexity: O(n+m)
# Time complexity: O(n+m)

"""
set(arr1) → {1, 2, 3} — removes duplicates.

set(arr2) → {2, 4} — removes duplicates.

& → finds common elements between the two sets.

list() → converts the resulting set into a list
"""

def set_intersection(arr1, arr2):
    return list(set(arr1) & set(arr2))



function intersectionArrays(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            // Add only if it's not already in the result
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }

            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++; // Move the smaller value's pointer
        } else {
            j++; // Move the smaller value's pointer
        }
    }

    return result;
}

console.log(intersectionArrays([1, 2, 2, 3], [2, 2, 4]));
// Output: [2]