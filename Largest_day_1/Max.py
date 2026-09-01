
arr = [1,2,3,4,5,6]

#  Brute force solution 


def find_largest(arr):
    for i in range(len(arr)):
        is_largest = True

        for j in range(len(arr)):
            if arr[j] > arr[i]:
                is_largest = False
                break

        if is_largest:
            return arr[i]

    result = find_largest(arr)

    print(result)

#  Track Maximum 🚀

def findMax(num) :
    max = 0
    for i in arr:
        if(i > max):
            max = i
    return max 
 
result = findMax(arr)

print(result)
