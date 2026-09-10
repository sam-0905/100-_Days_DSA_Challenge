# Brute force method
# Time complexity: O(n^2)
# space complexity: O(1)

arr = [1,2,3,4,5,6,7,8,9,10,10]

def duplicate(arr):
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i] == arr[j]:
                return True
    return None

result = duplicate(arr)

print(result)



# using set to check for duplicates
# Time complexity: O(n)
# space complexity: O(n)

def duplicateOpt(arr):
    seen = set()
    for num in arr:
        if num in seen:
            return True
        seen.add(num)
    return None

result = duplicateOpt(arr)
print(result)