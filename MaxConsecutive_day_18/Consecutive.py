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

# Optimized approach 

# Time Complexity: O(n)
#  space Complexity: O(1)


def max_Consecutive(arr):
    max_count = 0
    count = 0

    for i in range(len(arr)):
        if(arr[i] == 1):
            count +=1
            max_count = max(max_count,count)
        else:
            count = 0

    return max_count


# sliding approach

# Time Complexity: O(n)
#  space Complexity: O(1)


def maxConsecutive_Ones(nums):
    left = 0
    max_count = 0

    for right in range(len(nums)):

        if nums[right] == 0:
            left = right + 1

        max_count = max(max_count, right - left + 1)

    return max_count
