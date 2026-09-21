# Brute force method

# Time: O(n)
# Space: O(n)

def movesZeros(arr):
    result = []
    zeroCount = 0

    for num in arr:
       if(num == 0):
          zeroCount += 1
       else:
          result.append(num)

    while zeroCount > 0:
       result.append(0)
       zeroCount -= 1
      
    return result



# Optimized 
# Time: O(n)
# Space: O(n)

def movesZerosToEnd(arr):

    insert_pos = 0

    for i in range (len(arr)):
       if(arr[i] != 0):
          arr[insert_pos] = arr[i]
          insert_pos += 1

       while(insert_pos < len(arr)):
          arr[insert_pos] = 0
          insert_pos -= 1

       return arr
 
# Swap
# Time: O(n)
# Space: O(n)

def move_zeros(arr):
    insert_pos = 0

    for i in range(len(arr)):
        if arr[i] != 0:
            arr[insert_pos], arr[i] = arr[i], arr[insert_pos]
            insert_pos += 1

    return arr