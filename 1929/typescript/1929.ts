// tsc 1929.ts
// node 1929.js

function getConcatenation(nums: number[]): number[] {
	return [...nums, ...nums];
}

console.log(getConcatenation([1, 2, 1]));
