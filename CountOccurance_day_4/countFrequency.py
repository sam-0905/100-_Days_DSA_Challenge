# Brute fore method 

# Time complexity : O(n^2)
# Space complexity : O(n)
arr = [1,2,3,4,2,4,1]

def countOccurrence(arr):
    seen = []
    result ={}

    for i in range(len(arr)):
        if arr[i] in seen:
            continue

        count = 0

        for j in range(len(arr)):
            if arr[i] == arr[j]:
                count += 1
        result[arr[i]] = count
        seen.append(arr[i])

    return result

result = countOccurrence(arr)
print(result)


# optimized countOcc
# Time: O(n) 
# Space: O(n)
def countOcc(arr):
    frequency = {}

    for num in arr:
        frequency[num] = frequency.get(num,0) + 1

    return frequency

result = countOcc(arr)
print(result)


# sorting
# Time: O(n log n)
# Space: O(n)

def countFreq(arr):
    arr.sort()

    frequency ={}

    for num in arr:
        frequency[num] = frequency.get(num,0) + 1
    return frequency


     
result = countFreq(arr)
print(result)