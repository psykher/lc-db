# python 867.py

class Solution(object):
    def transpose(self, matrix):
        rows = len(matrix)
        cols = len(matrix[0])
        transposed = [[0 for _ in range(rows)] for _ in range(cols)]

        for i in range(rows):
            for j in range(cols):
                transposed[j][i] = matrix[i][j]
        return transposed

solution = Solution()

print(solution.transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
print(solution.transpose([[1, 2, 3], [4, 5, 6]]))
