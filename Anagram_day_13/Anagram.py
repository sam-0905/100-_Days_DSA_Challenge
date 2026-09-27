# Brute force method

# Time: O(n²)
# Space: O(1)

def checkAnagram(s,t):
    if len(s) != len(t) :
        return False

    for i in range (len(s)):

        sCount = 0
        tCount = 0

        for j in range (len(s)):

            if s[i] == s[j] :
                sCount += 1

            if s[i] == s[j]:
                tCount += 1


        if sCount != tCount :
            return False

    return True



# Optimized method


def isAnagram(s,t):

    if len(s) != len(t):
        return False

    frequency = {}

    for(char in s):

        frequency[char] = frequency.get(char,0) + 1
    
    for(char in t):
        if(char not in frequency or frequency[char] == 0):
            return false

        frequency[char] -= 1

    
    return true

        

# Sort approach

# Time: O(n log n)
# Space: O(n)

def is_anagram(s, t):
    if len(s) != len(t):
        return False

    return sorted(s) == sorted(t)