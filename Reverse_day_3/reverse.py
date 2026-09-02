# Brute force solution
arr = [1, 2, 3, 4, 5]
def reverse_string(s):
    reversed = []
    for i in range(len(s) - 1, -1, -1):
        reversed.append(s[i])
    return reversed
result = reverse_string(arr)
print(result)  


