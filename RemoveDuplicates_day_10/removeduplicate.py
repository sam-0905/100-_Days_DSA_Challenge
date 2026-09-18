# Brute force method
# Time: O(n²)
# Space: O(n)


def checkDuplicate(arr):
    result = []

    for num in arr:
        if num not in result:
            result.append(num)

    return result
