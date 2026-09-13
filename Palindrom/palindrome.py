# Brute force method
# Time and space complexity is O(n)
s = "racecar"

def isPalindrome(s):
    rev = ""
    for i in range (len(s)-1,-1,-1,-1):
        rev += s[i]
    if(rev == s):
        return True
    else:
        return False

result = isPalindrome(s)





