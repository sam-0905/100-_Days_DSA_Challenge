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


# Two pointer method

# space complexity: O(n+m)
# Time complexity: O(nlogn + mlogm)

def intersection_arrays(arr1, arr2):
    arr1.sort()
    arr2.sort()

    i = 0
    j = 0
    result = []

    while i < len(arr1) and j < len(arr2):
        if arr1[i] == arr2[j]:
            if not result or result[-1] != arr1[i]:
                result.append(arr1[i])

            i += 1
            j += 1

        elif arr1[i] < arr2[j]:
            # Which pointer moves here?
            ...

        else:
            # Which pointer moves here?
            ...

    return result