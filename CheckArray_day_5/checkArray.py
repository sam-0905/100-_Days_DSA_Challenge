# // Brute force method to check if an array is sorted
# // Time Complexity: O(n^2)
# // Space Complexity: O(1)


def checkArray(arr):
    for i in range(len(arr)):
        for j in range(i+1 , len(arr)):
            if arr[i] > arr[j]:
                return False
    return True

result = checkArray([1, 2, 3, 4, 5])
print(result)  

# optimized method to check if an array is sorted
# Time Complexity: O(n)
# Space Complexity: O(1)

def checkArrayOptimized(arr):
    for i in range(len(arr)-1):
        if arr[i] > arr[i+1]:
            return False
    return True

result = checkArrayOptimized([1, 2, 3, 4, 5])
print(result)


# sort array in ascending order
# Time Complexity: O(n log n)
# Space Complexity: O(n)

def sortArray(arr):
    sorted_arr = sorted(arr)
    return arr == sorted_arr    

result = sortArray([1, 2, 3, 4, 5])
print(result)