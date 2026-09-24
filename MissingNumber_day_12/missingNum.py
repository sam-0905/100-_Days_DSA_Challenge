# Brute force method


def checkTheMissingNum(arr):

    n = len(arr)

    for i in range(n+1):
        if i not in arr:
            return i
    return -1

# Optimized method

def findMissingNumber(arr):

    n = len(arr)

    expectedNum = n * (n+1) // 2

    actualNum = 0 

    for num in arr:
        actualNum += 1

    return expectedNum - actualNum  
