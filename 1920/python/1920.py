# python 1920.py

class Solution(object):
    def buildArray(self, nums):
        return [nums[i] for i in nums]

solution = Solution()

print(solution.buildArray([0, 2, 1, 5, 3, 4]))
