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

# optimized method

# Time complexity: O(n)
# space complexity: O(n)

def firstUniqChar(s):
    frequency = {}
    for char in s:
        frequency[char] = frequency.get(char, 0) + 1

    for i in range(len(s)):
        if frequency[s[i]] == 1:
            return i
    return -1

# fixed-Size Frequency Array

# Time complexity: O(n)
# Space complexity: O(1)

def first_unique_char(s):
    freq = [0] * 26

    for char in s:
        freq[ord(char) - ord('a')] += 1

    for i, char in enumerate(s):
        if freq[ord(char) - ord('a')] == 1:
            return i

    return -1