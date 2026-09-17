# Brute force method
# // Time complexity O(n^2)
# // space complexity O(n)

def twoSum(arr,target):
    for i in range (len(arr)):
        for j in range (i+1 ,len(arr)):
            if arr[i] + arr[j]  == target:
               return[arr[i],arr[j]]
    return []


