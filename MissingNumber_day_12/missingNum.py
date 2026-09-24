# Brute force method


def checkTheMissingNum(arr):

    n = len(arr)

    for i in range(n+1):
        if i not in arr:
            return i
    return -1

