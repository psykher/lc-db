// tsc 1.ts
// node 1.js

function twoSum(nums: number[], target: number) {
	const complements: Record<number, number> = {};

	for (let i: number = 0; i < nums.length; i++) {
		const complement: number = target - nums[i];

		if (complements[complement] !== undefined) {
			return [complements[complement], i];
		}

		complements[nums[i]] = i;
	}

	return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
