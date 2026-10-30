# Brute force method

# Time Complexity: O(n^2)
#  space Complexity: O(1)


def maxConsecutiveOnes(nums):
    max_count =0

    for i in range(len(nums)):
        count = 0
        for j in range(i, len(nums)):
            if nums[j] == 1:
                count += 1
                max_count = max(max_count, count)       
            else:
                break

    return max_count