# Brute force method
# Time Complexity: O(n^2)   
# Space Complexity: O(1)


def singleNumber(nums):
    for i in range(len(nums)):
        count = 0
        for j in range(len(nums)):
            if nums[i] == nums[j]:
                count += 1
        if count == 1:
            return nums[i]
        
# Optimized method
# Time Complexity: O(n)
# Space Complexity: O(1)

def singleNumberOptimized(nums):
    result = 0
    for num in nums:
        result ^= num
    return result
    