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

