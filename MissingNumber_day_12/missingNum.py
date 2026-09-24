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

# set method

def find_missing_number(arr):
    seen = set(arr)

    for num in range(len(arr) + 1):
        if num not in seen:
            return num

    return -1