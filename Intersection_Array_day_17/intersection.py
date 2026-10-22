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

