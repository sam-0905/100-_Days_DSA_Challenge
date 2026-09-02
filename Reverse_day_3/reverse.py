# Brute force solution
arr = [1, 2, 3, 4, 5]
def reverse_string(s):
    reversed = []
    for i in range(len(s) - 1, -1, -1):
        reversed.append(s[i])
    return reversed
result = reverse_string(arr)
print(result)  


# Optimized solution

def reverse_string_optimized(s):
    left = 0
    right = len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return s

result = reverse_string_optimized(arr)
print(result)  
