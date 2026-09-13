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




# Optimized approach

def isPalindromeFun(s):
    left =0
    right = (len(s)) -1

    while(left<right):
        if(s[left] != s[right]):
            return False

        left +=1
        right -=1
        
    return True