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

