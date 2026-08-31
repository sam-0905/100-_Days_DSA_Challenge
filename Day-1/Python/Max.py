#  Brute force solution 

arr = [1,2,3,4,5,6]

def findMax(num) :
    max = 0
    for i in arr:
        if(i > max):
            max = i
    return max 
 
result = findMax(arr)

print(result)


# Built in method
find_max = lambda num: max(num)

result = find_max(arr)


# Approach using reduce()

find_largest = lambda max_val, cur: cur if cur > max_val else max_val

result = find_largest