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
        
# Optimized method - XOR method
# Time Complexity: O(n)
# Space Complexity: O(1)

def singleNumberOptimized(nums):
    result = 0
    for num in nums:
        result ^= num
    return result


# sorted method
# Time Complexity: O(nlogn) 
# Space Complexity: O(1)

def singleNumberSorted(nums):
    nums.sort()
    for i in range(0, len(nums) - 1, 2):
        if nums[i] != nums[i + 1]:
            return nums[i]
    return nums[-1]