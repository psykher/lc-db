// tsc 2114.ts
// node 2114.js

function mostWordsFound(sentences: string[]): number {
	return sentences.reduce(
		(maxWords: number, sentence: string) =>
			Math.max(maxWords, sentence.split(" ").length),
		0
	);
}

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
