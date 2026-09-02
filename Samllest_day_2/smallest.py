# Brute force approach
arr = [3, 5, 2, 1, 4]

def smallest(arr):
    for i in len(arr):
        isSmallest = True

        for j in len(arr):
            if arr[j] < arr[i]:
                isSmallest = False
                break

        if isSmallest:
           return arr[i]
        
    result = smallest(arr)
    print("result",result)


# Track Minimum 🚀

def findMin(arr):
    min = arr[0]
    for i in arr:
        if(i < min):
            min = i
    return min


# Sorting
def find_smallest(arr):
    arr.sort()
    return arr[0]