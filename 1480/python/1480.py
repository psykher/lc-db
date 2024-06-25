# python 1480.py

class Solution(object):
    def runningSum(self, nums):
        return [sum(nums[: i + 1]) for i in range(len(nums))]

solution = Solution()

print(solution.runningSum([1, 2, 3, 4]))
