
# Brute force method

# Time complexity: O((n+m)log(n+m))

# Space complexity: O(n+m)


def mergeArrays(arr1, arr2):
    mergedArr = arr1 + arr2
    mergedArr.sort()
    return mergedArr


# Two pointer method

# Time complexity: O(n+m)
# Space complexity: O(n+m)


def mergeArraysTwoPointer(arr1,arr2):
    mergedArr = []
    i = 0
    j = 0

    while i < len(arr1) and j < len(arr2):
        if(arr1[i] < arr2[j]):
            mergedArr.append(arr1[i])
            i += 1
        else:
            mergedArr.append(arr2[j])
            j += 1

    while i < len(arr1):
        mergedArr.append(arr1[i])
        i += 1

    while j < len(arr2):
        mergedArr.append(arr2[j])
        j += 1

    return mergedArr


# Three pointer method
# Time complexity: O(n+m)
#  Space complexity: O(1)

def merge_sorted_arrays(nums1, m, nums2, n):
    i = m - 1
    j = n - 1
    k = m + n - 1

    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[k] = nums1[i]
            i -= 1
        else:
            nums1[k] = nums2[j]
            j -= 1

        k -= 1

    return nums1


print(merge_sorted_arrays([1, 4, 7, 0, 0, 0], 3, [2, 3, 6], 3))
# [1, 2, 3, 4, 6, 7]