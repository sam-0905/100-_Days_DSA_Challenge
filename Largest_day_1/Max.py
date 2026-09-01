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
