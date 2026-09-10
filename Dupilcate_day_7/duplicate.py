# Brute for method 

arr = [1,2,3,4,5,6,7,8,9,10,10]

def duplicate(arr):
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i] == arr[j]:
                return True
    return None

result = duplicate(arr)

print(result)

