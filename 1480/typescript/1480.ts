// tsc 1480.ts
// node 1480.js

function runningSum(nums: number[]): number[] {
	let result: number[] = [];

	for (let i: number = 0, sum: number = 0; i < nums.length; i++) {
		sum += nums[i];
		result.push(sum);
	}

	return result;
}

console.log(runningSum([1, 2, 3, 4]));
