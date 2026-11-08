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

# optimized method
# Time Complexity: O(n)
# space Complexity: O(1)


def maxProfitOptimized(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    return max_profit