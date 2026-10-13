
# Brute force method

# Time complexity: O((n+m)log(n+m))

# Space complexity: O(n+m)

def mergeArrays(arr1, arr2):
    mergedArr = arr1 + arr2
    mergedArr.sort()
    return mergedArr