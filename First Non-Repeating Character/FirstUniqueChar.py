# brute force method

# Time complexity: O(n^2)
# space complexity: O(1)

def firstUniqChar(s):
    for i in range(len(s)):
        count = 0
        for j in range(len(s)):
            if s[i] == s[j]:
                count += 1

        if s.count(s[i]) == 1:
            return i
    return -1