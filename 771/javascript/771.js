// node 771.js

var numJewelsInStones = function (jewels, stones) {
	let count = 0;

	for (let i = 0; i < stones.length; i++) {
		if (jewels.indexOf(stones[i]) !== -1) {
			count++;
		}
	}

	return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
