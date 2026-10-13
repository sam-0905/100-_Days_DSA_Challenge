
# Brute force method

# Time complexity: O((n+m)log(n+m))

# Space complexity: O(n+m)

def mergeArrays(arr1, arr2):
    mergedArr = arr1 + arr2
    mergedArr.sort()
    return mergedArr


# Two pointer method

# Time complexity: O(n+m)
# Space complexity: O(n+m)


def mergeArraysTwoPointer(arr1,arr2):
    mergedArr = []
    i = 0
    j = 0

    while i < len(arr1) and j < len(arr2):
        if(arr1[i] < arr2[j]):
            mergedArr.append(arr1[i])
            i += 1
        else:
            mergedArr.append(arr2[j])
            j += 1

    while i < len(arr1):
        mergedArr.append(arr1[i])
        i += 1

    while j < len(arr2):
        mergedArr.append(arr2[j])
        j += 1

    return mergedArr