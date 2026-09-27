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