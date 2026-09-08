#  Brute force approach

def second_largest(arr):
    if len(arr) <2:
        return None
    largest = float('-inf')
    for i in range(len(arr)):
        if arr[i] > largest:
            largest = arr[i]

    second_largest = float('-inf')
    for i in range(len(arr)):
        if arr[i] > second_largest and arr[i] != largest:
            second_largest = arr[i]

    return second_largest

result = second_largest([1, 2, 3, 4, 5])
print(result)  # Output: 4



