// tsc 1512.ts
// node 1512.js

function numIdenticalPairs(nums: number[]): number {
	const counts: Record<number, number> = {};
	let pairs: number = 0;

	for (let num of nums) {
		if (counts[num] !== undefined) {
			pairs += counts[num];
		}

		counts[num] = (counts[num] || 0) + 1;
	}

	return pairs;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
