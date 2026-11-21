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