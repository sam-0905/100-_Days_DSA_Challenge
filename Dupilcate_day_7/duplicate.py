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

# optimized method

# Time complexity: O(n)
# space complexity: O(1)

def find_duplicate(arr):
    slow = arr[0]
    fast = arr[0]

    # Phase 1: Find a meeting point inside the cycle
    while True:
        slow = arr[slow]
        fast = arr[arr[fast]]

        if slow == fast:
            break

    # Phase 2: Find the entrance of the cycle
    slow = arr[0]

    while slow != fast:
        slow = arr[slow]
        fast = arr[fast]

    return slow

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