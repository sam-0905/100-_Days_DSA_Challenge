# Brute force method
# Time: O(n²)
# Space: O(n)


def checkDuplicate(arr):
    result = []

    for num in arr:
        if num not in result:
            result.append(num)

    return result


# Optimized way
# Time: O(n) 
# Space: O(1)


def remove_duplicates(arr):
    if not arr:
        return 0

    i = 0

    for j in range(1, len(arr)):
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]

    return i + 1

arr = [1, 1, 2, 2, 3, 4, 4]

k = remove_duplicates(arr)

print(k)          # 4
print(arr[:k])    # [1, 2, 3, 4]


# using set

# Time: O(n)
# Space: O(n)


def removeDuplicate(arr):
    return list(set(arr))