// tsc 771.ts
// node 771.js

function numJewelsInStones(jewels: string, stones: string): number {
	let count: number = 0;

	for (let i: number = 0; i < stones.length; i++) {
		if (jewels.indexOf(stones[i]) !== -1) {
			count++;
		}
	}

	return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
