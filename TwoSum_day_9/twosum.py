# Brute force method
# // Time complexity O(n^2)
# // space complexity O(n)

def twoSum(arr,target):
    for i in range (len(arr)):
        for j in range (i+1 ,len(arr)):
            if arr[i] + arr[j]  == target:
               return[arr[i],arr[j]]
    return []



# optimized way 

# // Time complexity O(n)
# // space complexity O(n) 

def twoSumNum(arr,target) :

    seen = set()

    for num in arr:
        needed = seen - target

        if needed in seen:
                return[needed,num]

        seen.add(num)

    return[num]


# Sorting

def twoSumSorting(arr,target):

    left = 0
    right = len(arr) -1

    while(left <right):
        sum = arr[left] +arr[right]

        if sum == target:
            return [arr[left],arr[right]]

        if(sum > target):
            right -+ 1
        else:
            left += 1

    return[]