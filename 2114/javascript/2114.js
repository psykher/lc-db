// node 2114.js

var mostWordsFound = function (sentences) {
	return sentences.reduce(
		(maxWords, sentence) => Math.max(maxWords, sentence.split(" ").length),
		0
	);
};

console.log(
	mostWordsFound([
		"alice and bob love leetcode",
		"i think so too",
		"this is great thanks very much",
	])
);

console.log(
	mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
