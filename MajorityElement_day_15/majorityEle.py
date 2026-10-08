# Brute force method
# Time complexity: O(n^2)
# Space complexity: O(1)


def find_majority_elem(arr):
    n = len(arr)
    for i in range(n):
        count = 0
        for j in range(n):
            if arr[i] == arr[j]:
                count += 1
        if count > n // 2:
            return arr[i]
    return None


# frequency method
# Time complexity: O(n) 
# Space complexity: O(n)


def findMajorityElem(arr):
    n = len(arr)
    freq = {}
    for num in arr:
        if num in freq:
            freq[num] += 1
        else:
            freq[num] = 1
    for key, value in freq.items():
        if value > n // 2:
            return key
    return None


# optimized method (Boyer–Moore Voting Algorithm)
# Time complexity: O(n)
# Space complexity: O(1)


def majorityElement(arr):
    count= 0
    candidate = None

    for num in arr:
        if count == 0:
            candidate = num

        if num == candidate:
            count += 1
        else:
            count -= 1

    return candidate


        



