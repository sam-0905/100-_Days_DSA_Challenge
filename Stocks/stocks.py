# brute force method
# Time Complexity: O(n^2)
# space Complexity: O(1)

def maxProfit(prices):
    max_profit = 0
    for i in range(len(prices)):
        for j in range(i+1, len(prices)):
            if prices[j] > prices[i]:
                max_profit = max(max_profit, prices[j] - prices[i])
    return max_profit

