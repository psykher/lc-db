# python 2114.py

class Solution(object):
    def mostWordsFound(self, sentences):
        return max(len(sentence.split()) for sentence in sentences)

solution = Solution()

print(
    solution.mostWordsFound(
        [
            "alice and bob love leetcode",
            "i think so too",
            "this is great thanks very much",
        ]
    )
)

print(
    solution.mostWordsFound(
        [
            "please wait",
            "continue to fight",
            "continue to win",
        ]
    )
)
