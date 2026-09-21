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