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


