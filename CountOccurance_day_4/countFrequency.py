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
    