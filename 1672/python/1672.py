# python 1672.py

class Solution(object):
    def maximumWealth(self, accounts):
        return max(sum(account) for account in accounts)

solution = Solution()

op1 = [[1, 2, 3], [3, 2, 1]]
op2 = [[1, 5], [7, 3], [3, 5]]

print(solution.maximumWealth(op1))
print(solution.maximumWealth(op2))
